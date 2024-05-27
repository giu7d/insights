import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'

import { authSession } from '@insights/package-auth'
import { TRPCError, initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { ZodError } from 'zod'

export const createContext = (ctx: CreateFastifyContextOptions) => ctx

const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
    },
  }),
})

export const createRouter = t.router

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
