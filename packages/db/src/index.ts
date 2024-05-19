import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'

import { connection } from '@/config'
import * as example from '@/schema/exemple'

const client = new Client({
  connectionString: connection.href,
})

export const schema = { ...example }

export const db = drizzle(client, { schema })
