const readline = require('node:readline/promises')
const { Readable } = require('node:stream')
const { GasPlugin } = require('esbuild-gas-plugin')

async function countLines(s) {
  return new Promise(resolve => {
    let count = 0
    const input = Readable.from([s])
    const rl = readline.createInterface({input})

    rl.on('line', () => {
      count++
    })

    rl.on('close', () => {
      resolve(count)
    })
  })
}

// TODO support node16
// TODO bannerの行数を数えて、ファイルの先頭からn行消す
// TODO GASの関数定義を作成
// TODO その後、ファイルの先頭にbannerを記載する
// TODO test
// TODO drop node14
const MyPlugin = {
  name: 'MyPlugin',
  setup(build) {
    let bannerLines = 0
    build.onStart(async () => {
      console.log('build start!')
      const jsBanner = build.initialOptions?.banner?.js
      if (jsBanner === undefined) return

      bannerLines = await countLines(jsBanner)
    })

    build.onEnd(() => {
      console.log('build finished', bannerLines)
    })
  }
}

require('esbuild').build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  logLevel: 'info',
  banner: {
    js: `/**
 * This is Banner.
 * This is Banner.
 * This is Banner.
 */
`,
  },
  footer: {
    js: '// This is js footer.',
  },
  plugins: [GasPlugin, MyPlugin]
}).catch(() => process.exit(1))
