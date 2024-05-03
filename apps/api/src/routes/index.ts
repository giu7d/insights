import { withRouter } from '@/config/trpc'

import billsRoutes from './bills'
import usersRoutes from './users'

const routes = withRouter({
  users: usersRoutes,
  bills: billsRoutes,
})

export type Routes = typeof routes

export default routes
