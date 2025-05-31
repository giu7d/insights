import baseConfig, { restrictEnvAccess } from '@insights/tooling-eslint/base'

/** @type {import('typescript-eslint').Config} */
export default [...baseConfig, ...restrictEnvAccess]
