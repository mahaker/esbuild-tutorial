const { GasPlugin } = require('esbuild-gas-plugin')

const MyPlugin = {
  name: 'my-plugin',
  setup(build) {
    const fs = require('fs')

    console.log(build)
    build.onResolve({ filter: /\.ts$/ }, args => {
      console.log('--- onResolve start ---')
      console.info(args)
      console.log('--- onResolve finish ---')
    })

    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      console.log('--- onLoad start ---')
      console.info(args)
      console.log('--- onLoad finish ---')
    })

    build.onStart(() => {
      console.log('build started')
    })

    build.onEnd(result => {
      console.log('build finished!')
      console.info(result)
      if(result.errors.length || result.warnings.length) return

      const outfile = fs.readFileSync(build.initialOptions.outfile)
      console.info(outfile.toString())
    })
  }
}

class MyClassPlugin {
  name = 'my-class-plugin'
  setup(build) {
    build.onEnd(result => {
      console.info('build finished!!')
      console.info(result)
    })
  }
}

const MyPluginFromFunction = (hoge) => ({
  name: 'my-plugin-from-function',
  setup(build) {
    build.onEnd(result => {
      console.info('build finished!!!')
      console.info(result)
      console.info(hoge)
    })
  }
})

require('esbuild').build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  logLevel: 'info',
  banner: {
    js: '// This is js banner.',
  },
  footer: {
    js: '// This is js footer.',
  },
  plugins: [GasPlugin, MyPlugin, new MyClassPlugin(), MyPluginFromFunction('mahaker')]
}).catch(() => process.exit(1))
