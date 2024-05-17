import esbuild from 'esbuild'
import authPkg from '../../packages/auth/package.json' assert { type: 'json' }
import dbPkg from '../../packages/db/package.json' assert { type: 'json' }
import pkg from './package.json' assert { type: 'json' }

export default esbuild.build({
  logLevel: 'info',
  entryPoints: ['./src/index.ts'],
  outfile: 'build/index.mjs',
  bundle: true,
  sourcemap: true,
  platform: 'node',
  format: 'esm',
  external: [
    ...Object.keys(authPkg.dependencies ?? {}),
    ...Object.keys(authPkg.peerDependencies ?? {}),
    ...Object.keys(dbPkg.dependencies ?? {}),
    ...Object.keys(dbPkg.peerDependencies ?? {}),
    ...Object.keys(pkg.dependencies ?? {}).filter(
      (dep) => !dep.startsWith('@splitter'),
    ),
    ...Object.keys(pkg.peerDependencies ?? {}).filter(
      (dep) => !dep.startsWith('@splitter'),
    ),
  ],
})
