// Learn more: https://docs.expo.dev/guides/monorepos/
const { getDefaultConfig } = require('expo/metro-config')
const { FileStore } = require('metro-cache')
const { withNativeWind } = require('nativewind/metro')

const path = require('path')

const config = getDefaultConfig(__dirname)

config.resolver.assetExts = [
  'png',
  'jpg',
  'jpeg',
  'gif',
  'webp',
  'svg',
  'gltf',
  'glb',
]

module.exports = withJestTest(
  withTurboRepoManagedCache(
    withMonoRepoPaths(
      withNativeWind(config, {
        input: './src/styles.css',
        configPath: './tailwind.config.ts',
      }),
    ),
  ),
)

/**
 * Add the monorepo paths to the Metro config.
 * This allows Metro to resolve modules from the monorepo.
 *
 * @see https://docs.expo.dev/guides/monorepos/#modify-the-metro-config
 * @param {import('expo/metro-config').MetroConfig} config
 * @returns {import('expo/metro-config').MetroConfig}
 */
function withMonoRepoPaths(config) {
  const projectRoot = __dirname
  const workspaceRoot = path.resolve(projectRoot, '../..')

  // #1 - Watch all files in the monorepo
  config.watchFolders = [workspaceRoot]

  // #2 - Resolve modules within the project's `node_modules` first, then all monorepo modules
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ]

  return config
}

/**
 * Move the Metro cache to the `node_modules/.cache/metro` folder.
 * This repository configured Turborepo to use this cache location as well.
 * If you have any environment variables, you can configure Turborepo to invalidate it when needed.
 *
 * @see https://turbo.build/repo/docs/reference/configuration#env
 * @param {import('expo/metro-config').MetroConfig} config
 * @returns {import('expo/metro-config').MetroConfig}
 */
function withTurboRepoManagedCache(config) {
  config.cacheStores = [
    new FileStore({ root: path.join(__dirname, 'node_modules/.cache/metro') }),
  ]
  return config
}

/**
 * Setup Jest to transform TypeScript and JavaScript files.
 *
 * @param {import('expo/metro-config').MetroConfig} config
 * @returns {import('expo/metro-config').MetroConfig}
 */
function withJestTest(config) {
  config.resolver.blockList = [
    /(.*.spec.ts?)$/,
    /(.*.spec.tsx?)$/,
    /(.*.test.ts?)$/,
    /(.*.test.tsx?)$/,
  ]
  return config
}
