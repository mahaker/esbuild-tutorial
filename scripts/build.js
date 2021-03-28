require('esbuild').build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  logLevel: 'info',
  minify: true,
  banner: {
    js: '// This is js banner.',
  },
  footer: {
    js: '// This is js footer.',
  }
}).catch(() => process.exit(1))
