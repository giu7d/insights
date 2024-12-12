import type { User } from './user'

export type Bill = {
  id: string
  icon: string
  name: string
  status: 'payed' | 'pending' | 'cancelled'
  participants: User[]
  splitValue: string
  totalValue: string
  currency: string
}
