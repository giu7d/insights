import config from '@splitter/tooling-eslint/base'

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['build/**'],
  },
  ...config,
]
