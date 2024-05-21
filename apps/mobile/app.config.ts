import type { ConfigContext, ExpoConfig } from 'expo/config'

const { ENV = 'development' } = process.env

function isProductionEnv() {
  return ENV === 'production'
}

function getName() {
  if (isProductionEnv()) return 'Splitter'
  return `Splitter (${ENV})`
}

function getBundleIdentifier() {
  if (isProductionEnv()) return 'com.prisma.splitter'
  return `com.prisma.splitter.${ENV.toLowerCase()}`
}

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  //
  // App Information
  name: getName(),
  slug: 'splitter',
  scheme: 'splitter',
  version: '1.0.0',
  owner: 'giu7d',
  //
  // UI & Assets
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  icon: './assets/images/icon.png',
  assetBundlePatterns: ['**/*'],
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  //
  // Build Params
  experiments: {
    typedRoutes: true,
  },
  //
  // Platforms
  ios: {
    bundleIdentifier: getBundleIdentifier(),
    supportsTablet: true,
  },
  android: {
    package: getBundleIdentifier(),
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  //
  // Plugins
  plugins: ['expo-router'],
  //
  // Environment
  extra: {
    // ...process.env,
    eas: {
      projectId: '916828f4-940a-42fa-a42d-a662c47baf27',
    },
  },
})
