import type { ConfigContext, ExpoConfig } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  // App Information
  name: getName(),
  slug: 'insights',
  scheme: 'insights',
  version: '1.0.0',
  owner: 'giu7d',
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
  // Build Params
  newArchEnabled: true,
  experiments: {
    typedRoutes: true,
  },
  // Platforms
  ios: {
    bundleIdentifier: getBundleIdentifier(),
    supportsTablet: true,
  },
  android: {
    package: getBundleIdentifier(),
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  // Plugins
  plugins: [],
  // Environment
  extra: {
    ...process.env,
    eas: {
      projectId: '916828f4-940a-42fa-a42d-a662c47baf27',
    },
  },
})

const { ENV = 'development' } = process.env

function isProductionEnv() {
  return ENV === 'production'
}

function getName() {
  if (isProductionEnv()) return 'Insights'
  return `Insights (${ENV})`
}

function getBundleIdentifier() {
  if (isProductionEnv()) return 'com.prisma.insights'
  return `com.prisma.insights.${ENV.toLowerCase()}`
}
