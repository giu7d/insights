import { serial, timestamp, varchar } from 'drizzle-orm/pg-core'

import { createTable } from './_table'

export const account = createTable('account', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 256 }).notNull(),
  lastName: varchar('last_name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})
