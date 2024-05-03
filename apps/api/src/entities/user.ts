import type { Cashback } from './cashback'

import { z } from 'zod'

export interface User {
  id: string
  photo?: string
  firstName: string
  lastName: string
  username: string
  cashback: Cashback
}

export const useValidUser: () => z.ZodType<Omit<User, 'id' | 'cashback'>> = () =>
  z.object({
    photo: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    username: z.string(),
  })
