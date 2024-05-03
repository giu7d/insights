import { MetroConfig, getDefaultConfig } from 'expo/metro-config'
import { withNativeWind } from 'nativewind/metro'
import { FileStore } from 'metro-cache'
import path from 'node:path'

const projectRoot = path.resolve(__dirname, '../')

const workspaceRoot = path.resolve(projectRoot, '../..')

/**
 * Add the monorepo paths to the Metro config.
 * This allows Metro to resolve modules from the monorepo.
 */
function withMonoRepoPaths(config: MetroConfig) {
  // #1 - Watch all files in the monorepo
  const watchFolders = [workspaceRoot]

  // #2 - Resolve modules within the project's `node_modules` first, then all monorepo modules
  const resolver = {
    ...config.resolver,
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules'),
    ],
  }

  return {
    ...config,
    watchFolders,
    resolver,
  }
}

/**
 * Move the Metro cache to the `node_modules/.cache/metro` folder.
 * This repository configured Turborepo to use this cache location as well.
 * If you have any environment variables, you can configure Turborepo to invalidate it when needed.
 */
function withTurboRepoManagedCache(config: MetroConfig) {
  const cacheStores = [
    new FileStore({
      root: path.join(projectRoot, 'node_modules/.cache/metro'),
    }),
  ]
  return {
    ...config,
    cacheStores,
  }
}

export function setupMetro() {
  return withTurboRepoManagedCache(
    withMonoRepoPaths(
      withNativeWind(getDefaultConfig(projectRoot) as any, {
        input: './src/styles.css',
        configPath: './tailwind.config.ts',
      }),
    ),
  )
}
