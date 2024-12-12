import type { FastifyReply, FastifyRequest } from 'fastify'

import withCompressPlugin from '@fastify/compress'
import withCORSPlugin from '@fastify/cors'
import withFormDataPlugin from '@fastify/formbody'
import { fastifyTRPCPlugin as withFastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastify from 'fastify'

import Authentication from '@insights/package-auth'

import router from '@/web/router'
import { createContext } from '@/web/trpc'

const app = fastify({ logger: true })

void app.register(withCORSPlugin, {
  origin: '*',
  allowedHeaders: ['Content-Type', ...Authentication.allowedHeaders],
  credentials: true,
})

void app.register(withCompressPlugin, {
  global: true,
  threshold: 1024,
})

void app.register(withFormDataPlugin)

void app.register(Authentication.withAuthenticationPlugin)

void app.register(withFastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router, createContext },
})

void app.get('/health', async (_req: FastifyRequest, res: FastifyReply) => {
  return res.status(200).send({
    code: 'OK',
    status: 200,
  })
})

void app.setErrorHandler(Authentication.withAuthenticationErrorHandler)

export default app
