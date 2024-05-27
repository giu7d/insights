import config from '@insights/tooling-eslint/base'

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['build/**'],
  },
  ...config,
]
