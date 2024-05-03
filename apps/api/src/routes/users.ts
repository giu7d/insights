import { z } from 'zod'

import { withProcedure, withRouter } from '@/config/trpc'
import { useValidUser } from '@/entities/user'
import CreateUser from '@/useCases/createUser'
import FindUser from '@/useCases/findUser'

const findUser = new FindUser()
const createUser = new CreateUser()

const findUserParams = z.object({ id: z.string() })

const usersRoutes = withRouter({
  find: withProcedure()
    .input(findUserParams)
    .query(async ({ input }) => await findUser.call(input.id)),
  create: withProcedure()
    .input(useValidUser())
    .mutation(async ({ input }) => await createUser.call(input)),
})

export default usersRoutes
