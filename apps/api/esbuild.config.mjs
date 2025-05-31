import esbuild from 'esbuild'

import authPackage from '@insights/package-auth/package.json' with { type: 'json' }
import dbPackage from '@insights/package-db/package.json' with { type: 'json' }
import validatorsPackage from '@insights/package-validators/package.json' with { type: 'json' }

import apiPackage from './package.json' with { type: 'json' }

function getDependencies(pkg) {
  return [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ]
}

function getExternalDependencies(packages = []) {
  return packages
    .flatMap((pkg) => getDependencies(pkg))
    .filter((dep) => !dep.startsWith('@insights'))
}

export default esbuild.build({
  logLevel: 'info',
  entryPoints: ['./src/index.ts'],
  outfile: 'build/index.mjs',
  bundle: true,
  sourcemap: true,
  minify: true,
  platform: 'node',
  format: 'esm',
  external: getExternalDependencies([
    authPackage,
    dbPackage,
    validatorsPackage,
    apiPackage,
  ]),
})
