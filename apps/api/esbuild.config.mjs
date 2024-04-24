import esbuild from 'esbuild'

export default esbuild.build({
  logLevel: 'info',
  entryPoints: ['./src/index.ts'],
  outfile: 'build/index.js',
  bundle: true,
  sourcemap: true,
  platform: 'node',
  format: 'esm',
  external: ['fastify']
})
