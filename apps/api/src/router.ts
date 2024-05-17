import { createTRPCRouter, usePublicProcedure } from '@/trpc'
import Bills from '@/use-cases/bills'
import Users from '@/use-cases/users'
import {
  CreateUserSchema,
  FindBillsSchema,
  FindUserSchema,
} from '@splitter/package-validators'

const bills = createTRPCRouter({
  list: usePublicProcedure.query(async () => await Bills.list()),
  find: usePublicProcedure
    .input(FindBillsSchema)
    .query(async ({ input }) => await Bills.find(input.id)),
})

const users = createTRPCRouter({
  find: usePublicProcedure
    .input(FindUserSchema)
    .query(async ({ input }) => await Users.find(input.id)),
  create: usePublicProcedure
    .input(CreateUserSchema)
    .mutation(async ({ input }) => await Users.create(input)),
})

export const router = createTRPCRouter({ bills, users })

export type Router = typeof router
