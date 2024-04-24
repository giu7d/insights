import { createTRPCMsw } from 'msw-trpc'
import { setupServer } from 'msw/node'
import type { Routes } from '@splitter/api/src/routes'

export const trpcMSW = createTRPCMsw<Routes>()

export const server = setupServer(
  trpcMSW.bills.list.query((_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data([
        {
          id: '0',
          icon: '🍖',
          name: 'Churras',
          status: 'pending',
          participants: [],
          currency: 'BRL',
          splitValue: '60.00',
          totalValue: '240.00'
        },
        {
          id: '1',
          icon: '📺',
          name: 'TV',
          status: 'payed',
          participants: [],
          currency: 'BRL',
          splitValue: '1401.00',
          totalValue: '2802.00'
        }
      ])
    )
  }),
  trpcMSW.bills.find.query((_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        id: '1',
        icon: '📺',
        name: 'TV',
        status: 'payed',
        participants: [],
        currency: 'BRL',
        splitValue: '1401.00',
        totalValue: '2802.00'
      })
    )
  }),
  trpcMSW.users.find.query((_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        id: '1234',
        photo: 'https://avatars.githubusercontent.com/u/30274817?v=4',
        firstName: 'Giuseppe',
        lastName: 'Setem',
        username: 'giu.setem',
        cashback: {
          total: '20.00',
          currency: 'BRL'
        }
      })
    )
  })
)
