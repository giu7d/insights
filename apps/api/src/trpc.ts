import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'

import { TRPCError, initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { ZodError } from 'zod'

import { authSession } from '@splitter/package-auth'

export const createTRPCContext = ({
  req,
  res,
}: CreateFastifyContextOptions) => {
  return {
    req,
    res,
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
    },
  }),
})

export const createCallerFactory = t.createCallerFactory

export const createTRPCRouter = t.router

export const usePublicProcedure = t.procedure

export const useAuthenticatedProcedure = t.procedure.use(
  async ({ ctx, next }) => {
    const session = await authSession.getSession(ctx.req, ctx.res, {
      sessionRequired: false,
    })

    if (!session) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    return next({
      ctx: {
        session: {
          userId: session.getUserId(),
        },
      },
    })
  },
)
