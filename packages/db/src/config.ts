import type { Config } from 'drizzle-kit'

import env from '@/env'

export const connection = new URL(
  `postgres://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
)

export default {
  schema: './src/schema',
  driver: 'pg',
  tablesFilter: ['splitter_*'],
  dbCredentials: { connectionString: connection.href },
} satisfies Config
