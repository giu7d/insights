import type { Config } from 'drizzle-kit'

import env from '@/env'

export const connection = new URL(
  `postgres://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
)

export default {
  schema: './src/schema',
  dialect: 'postgresql',
  tablesFilter: ['insights_*'],
  casing: 'snake_case',
  dbCredentials: { url: connection.href },
} satisfies Config
