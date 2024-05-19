import {
  CreateUserSchema,
  FindBillsSchema,
  FindUserSchema,
} from '@splitter/package-validators'

import Bills from '@/use-cases/bills'
import Users from '@/use-cases/users'
import { createRouter, usePublicProcedure } from '@/web/trpc'

const bills = createRouter({
  list: usePublicProcedure.query(async () => await Bills.list()),
  find: usePublicProcedure
    .input(FindBillsSchema)
    .query(async ({ input }) => await Bills.find(input.id)),
})

const users = createRouter({
  find: usePublicProcedure
    .input(FindUserSchema)
    .query(async ({ input }) => await Users.find(input.id)),
  create: usePublicProcedure
    .input(CreateUserSchema)
    .mutation(async ({ input }) => await Users.create(input)),
})

export const router = createRouter({ bills, users })

export type Router = typeof router
