import baseConfig from '@insights/tooling-eslint/base'
import reactConfig from '@insights/tooling-eslint/react'

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['.expo/**', 'expo-plugins/**'],
  },
  ...baseConfig,
  ...reactConfig,
]
