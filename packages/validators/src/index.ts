import { z } from 'zod'

export const CreateUserSchema = z.object({
  photo: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
})

export const FindUserSchema = z.object({ id: z.string() })

export const FindBillsSchema = z.object({ id: z.string() })
