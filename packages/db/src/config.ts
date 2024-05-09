import type { Config } from 'drizzle-kit'

import { createEnv } from '@t3-oss/env-core'
import * as z from 'zod'

const env = createEnv({
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

export const connection = new URL(
  `postgres://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
)

export default {
  schema: './src/schema',
  driver: 'pg',
  tablesFilter: ['splitter_*'],
  dbCredentials: { connectionString: connection.href },
} satisfies Config
