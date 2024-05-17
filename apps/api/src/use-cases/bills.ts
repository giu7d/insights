import { TRPCError } from '@trpc/server'

import type { Bill } from '@/entities/bill'

async function list(): Promise<Bill[]> {
  return await new Promise((resolve) =>
    resolve([
      {
        id: '0',
        icon: '🍖',
        name: 'Churras',
        status: 'pending',
        participants: [],
        currency: 'BRL',
        splitValue: '60.00',
        totalValue: '240.00',
      },
      {
        id: '1',
        icon: '📺',
        name: 'TV',
        status: 'payed',
        participants: [],
        currency: 'BRL',
        splitValue: '1401.00',
        totalValue: '2802.00',
      },
      {
        id: '2',
        icon: '⚽️',
        name: 'Futebas',
        status: 'payed',
        participants: [],
        currency: 'BRL',
        splitValue: '10.00',
        totalValue: '200.00',
      },
      {
        id: '3',
        icon: '🔗',
        name: 'Internet',
        status: 'cancelled',
        participants: [],
        currency: 'BRL',
        splitValue: '100.00',
        totalValue: '200.00',
      },
    ]),
  )
}

async function find(billId: string) {
  const bills = await Bills.list()
  const bill = bills.find(({ id }) => id === billId)

  if (!bill) throw new TRPCError({ code: 'NOT_FOUND' })

  return bill
}

const Bills = { find, list }

export default Bills
