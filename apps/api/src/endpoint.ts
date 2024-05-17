import type { FastifyReply, FastifyRequest } from 'fastify'

import corsPlugin from '@fastify/cors'
import formDataPlugin from '@fastify/formbody'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastify from 'fastify'

import { router } from '@/router'
import { createTRPCContext } from '@/trpc'
import {
  authCorsHeaders,
  authErrorHandler,
  authPlugin,
} from '@splitter/package-auth'

const app = fastify({ logger: true })

void app.register(corsPlugin, {
  origin: '*',
  allowedHeaders: ['Content-Type', ...authCorsHeaders],
  credentials: true,
})

void app.register(formDataPlugin)

void app.register(authPlugin)

void app.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router, createContext: createTRPCContext },
})

void app.get('/health', async (_req: FastifyRequest, res: FastifyReply) => {
  return res.status(200).send({
    code: 'OK',
    status: 200,
  })
})

void app.setErrorHandler(authErrorHandler)

export default app
