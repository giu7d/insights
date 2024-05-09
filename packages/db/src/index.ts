import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'

import { connection } from '@/config'
import * as example from '@/schema/exemple'

export const schema = { ...example }

const client = new Client({
  connectionString: connection.href,
})

export const db = drizzle(client, { schema })
