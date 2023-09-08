import { build, stop } from 'https://deno.land/x/esbuild@v0.18.11/mod.js'
import { GasPlugin } from 'npm:esbuild-gas-plugin@0.7.0'
import httpFetch from 'https://deno.land/x/esbuild_plugin_http_fetch@v1.0.2/index.js'

await build({
    entryPoints: ['main.ts'],
    bundle: true,
    outfile: 'dist/bundle.js',
    target: ['node14'],
    banner: {
      js: `
/**
 * This is banner.
 * hogehoge
 */
`,
    },
    plugins: [httpFetch, GasPlugin]
})
stop()
