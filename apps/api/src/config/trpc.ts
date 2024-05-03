import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'

import { initTRPC } from '@trpc/server'

export { fastifyTRPCPlugin as withFastifyTRPC } from '@trpc/server/adapters/fastify'

export const trpc = initTRPC.create()

export const withRouter = trpc.router

export const withMiddleware = trpc.middleware

export const withProcedure = () => trpc.procedure

export function createContext({ req, res }: CreateFastifyContextOptions) {
  return { req, res }
}

export type Context = inferAsyncReturnType<typeof createContext>
