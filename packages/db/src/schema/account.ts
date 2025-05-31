import { serial, timestamp, varchar } from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod/v4'

import { createTable } from './_table'

export const account = createTable('account', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 256 }).notNull(),
  lastName: varchar('last_name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const CreateAccountSchema = createInsertSchema(account, {
  firstName: z.string().max(256),
  lastName: z.string().max(256),
  email: z.string().max(256),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})
