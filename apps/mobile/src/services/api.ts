import { createTRPCReact, httpBatchLink } from '@trpc/react-query'
import Constants from 'expo-constants'
import type { Routes } from '@splitter/api/src/routes'

const API_URL = Constants?.expoConfig?.extra?.API_URL

export const API_TRPC_URL = `${API_URL}/trpc`

export const trpc = createTRPCReact<Routes>()

export const TRPCProvider = trpc.Provider

export const createTRPCClient = () =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: API_TRPC_URL.toString()
      })
    ]
  })
