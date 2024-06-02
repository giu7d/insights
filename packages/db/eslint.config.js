import config from '@insights/tooling-eslint/base'

/** @type {import('typescript-eslint').Config} */
export default [
  ...config,
  {
    rules: {
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },
]
