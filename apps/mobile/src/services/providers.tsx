import { useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { TRPCProvider, createTRPCClient } from '@/services/api'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function Provider({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => createTRPCClient())

  return (
    <TRPCProvider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TRPCProvider>
  )
}
