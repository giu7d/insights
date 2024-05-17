import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import authEnv from '@splitter/package-auth/env'

export default createEnv({
  extends: [authEnv],
  server: {
    API_HOST: z.string(),
    API_PORT: z.string(),
    DB_HOST: z.string(),
    DB_PORT: z.string(),
    DB_NAME: z.string(),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string(),
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  runtimeEnv: process.env as any,
  emptyStringAsUndefined: true,
})
