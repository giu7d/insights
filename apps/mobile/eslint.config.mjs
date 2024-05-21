import baseConfig from '@splitter/tooling-eslint/base'
import reactConfig from '@splitter/tooling-eslint/react'

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['.expo/**', 'expo-plugins/**'],
  },
  ...baseConfig,
  ...reactConfig,
]
