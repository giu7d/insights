import { createEnv } from '@t3-oss/env-core'
import * as z from 'zod'

export default createEnv({
  server: {
    DB_HOST: z.string(),
    DB_PORT: z.string(),
    DB_NAME: z.string(),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
