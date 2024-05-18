import endpoint from '@/endpoint'
import env from '@/env'

const host = env.API_HOST
const port = env.API_PORT

endpoint
  .listen({ host, port })
  .then(() => console.log(host, port))
  .catch((error) => console.error(error))
