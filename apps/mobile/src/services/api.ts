import type { Router } from '@insights/api/router'

import { createTRPCReact, httpBatchLink, loggerLink } from '@trpc/react-query'
import superjson from 'superjson'

import env, { isProductionEnv } from '@/services/env'

const protocol = isProductionEnv(env.ENV) ? 'https' : 'http'
const host = isProductionEnv(env.ENV) ? env.API_HOST : env.DEBUGGER_HOST
const port = env.API_PORT
const pathname = '/trpc'

const TRPC_API_URL = `${protocol}://${host}:${port}${pathname}`

export const api = createTRPCReact<Router>()

export const TRPCProvider = api.Provider

export const createTRPCClient = () =>
  api.createClient({
    transformer: superjson,
    links: [
      loggerLink({
        colorMode: 'ansi',
        enabled: (opts) => opts.direction === 'down' && !opts.result,
      }),
      httpBatchLink({
        url: TRPC_API_URL,
        headers() {
          const headers = new Map<string, string>()
          headers.set('x-trpc-source', 'expo-react')
          return Object.fromEntries(headers)
        },
      }),
    ],
  })

export { type RouterInputs, type RouterOutputs } from '@insights/api/router'
