import type { FastifyReply, FastifyRequest } from 'fastify'

import cors from '@fastify/cors'
import fastify from 'fastify'

import { createContext, withFastifyTRPC } from '@/config/trpc'
import routes from '@/routes'

const app = fastify({ logger: true })

void app.register(cors, {
  origin: '*',
})

void app.get('/', async (req: FastifyRequest, res: FastifyReply) => {
  void res.status(200).send({
    code: 'OK',
    status: 200,
  })
})

void app.register(withFastifyTRPC, {
  prefix: '/trpc',
  trpcOptions: { router: routes, createContext },
})

export default app
