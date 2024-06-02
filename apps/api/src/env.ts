import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

import authEnv from '@insights/package-auth/env'

export default createEnv({
  extends: [authEnv],
  server: {
    ENV: z.union([z.literal('development'), z.literal('production')]),
    API_HOST: z.string(),
    API_PORT: z.number(),
    DB_HOST: z.string(),
    DB_PORT: z.string(),
    DB_NAME: z.string(),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string(),
  },
  runtimeEnv: {
    ...process.env,
    API_HOST: process.env.API_HOST ?? 'localhost',
    API_PORT: Number.parseInt(process.env.API_PORT ?? '4000', 10),
  },
  emptyStringAsUndefined: true,
})
