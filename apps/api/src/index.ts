import endpoint from '@/endpoint'
import env from '@/env'
import { initAuth } from '@splitter/package-auth'

const host = env.API_HOST
const port = parseInt(env.API_PORT, 10)

initAuth()

endpoint
  .listen({ host, port })
  .then(() => console.log(host, port))
  .catch((error) => console.error(error))
