import { serial, timestamp, varchar } from 'drizzle-orm/pg-core'

import { createTable } from '@/schema/_table'

export const post = createTable('example', {
  id: serial('id').primaryKey(),
  title: varchar('name', { length: 256 }).notNull(),
  content: varchar('content', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})
