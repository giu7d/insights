import type { Bill } from '@/entities/bill'

export default class ListBills {
  async call(): Promise<Bill[]> {
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
}
