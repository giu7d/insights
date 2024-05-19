import type { FastifyReply, FastifyRequest } from 'fastify'

import compressPlugin from '@fastify/compress'
import corsPlugin from '@fastify/cors'
import formDataPlugin from '@fastify/formbody'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastify from 'fastify'

import {
  authCorsHeaders,
  authErrorHandler,
  authPlugin,
} from '@splitter/package-auth'

import { router } from '@/web/router'
import { createContext } from '@/web/trpc'

const app = fastify({ logger: true })

void app.register(corsPlugin, {
  origin: '*',
  allowedHeaders: ['Content-Type', ...authCorsHeaders],
  credentials: true,
})

void app.register(compressPlugin, {
  global: true,
  threshold: 1024,
})

void app.register(formDataPlugin)

void app.register(authPlugin)

void app.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router, createContext },
})

void app.get('/health', async (_req: FastifyRequest, res: FastifyReply) => {
  return res.status(200).send({
    code: 'OK',
    status: 200,
  })
})

void app.setErrorHandler(authErrorHandler)

export default app
