import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

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

const router = createRouter({ bills, users })

export default router

export type Router = typeof router

export type RouterInputs = inferRouterInputs<Router>

export type RouterOutputs = inferRouterOutputs<Router>
