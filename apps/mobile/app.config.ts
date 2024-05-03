import 'ts-node/register'

import type { ExpoConfig } from 'expo/config'
import Application from './config/setupApp'

const config: ExpoConfig = {
  //
  // App Information
  name: Application.getName(),
  slug: 'splitter',
  scheme: 'splitter',
  version: '1.0.0',
  owner: 'giu7d',
  //
  // UI & Assets
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  icon: './assets/icon.png',
  assetBundlePatterns: ['**/*'],
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  //
  // Build Params
  jsEngine: 'hermes',
  runtimeVersion: 'exposdk:50.0.0',
  experiments: {
    tsconfigPaths: false,
    typedRoutes: true,
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/916828f4-940a-42fa-a42d-a662c47baf27',
  },
  //
  // Platforms
  ios: {
    supportsTablet: true,
    bundleIdentifier: Application.getBundleIdentifier(),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: Application.getBundleIdentifier(),
  },
  web: {
    bundler: 'metro',
    favicon: './assets/favicon.png',
  },
  //
  // Plugins
  plugins: [
    'expo-router',
    '@config-plugins/detox',
    [
      'expo-build-properties',
      {
        ios: {
          flipper: true,
          newArchEnabled: false,
        },
        android: {
          newArchEnabled: false,
          usesCleartextTraffic: true,
          // kotlinVersion: '1.8.10',
        },
      },
    ],
    [
      'expo-updates',
      {
        username: 'giu7d',
      },
    ],
  ],
  //
  // Environment
  extra: {
    ...process.env,
    eas: {
      projectId: '916828f4-940a-42fa-a42d-a662c47baf27',
    },
  },
}

export default config
