import { z } from 'zod'

import { withProcedure, withRouter } from '@/config/trpc'
import FindBill from '@/useCases/findBill'
import ListBills from '@/useCases/listBills'

const listBills = new ListBills()
const findBill = new FindBill()

const findBillParams = z.object({ id: z.string() })

const billsRoutes = withRouter({
  list: withProcedure().query(async () => await listBills.call()),
  find: withProcedure()
    .input(findBillParams)
    .query(async ({ input }) => await findBill.call(input.id)),
})

export default billsRoutes
