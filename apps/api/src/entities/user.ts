import type { Cashback } from './cashback'

export type User = {
  id: string
  photo?: string
  firstName: string
  lastName: string
  username: string
  cashback: Cashback
}
