import { z } from 'zod'

export const FindUserSchema = z.object({ id: z.string() })

export const FindBillsSchema = z.object({ id: z.string() })
