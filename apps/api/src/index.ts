import endpoint from '@/endpoint'
import env from '@/env'
import log from '@/utils/log'

endpoint
  .listen({ host: env.API_HOST, port: env.API_PORT })
  .then(() => {
    console.clear()
    log.logServerStart()
  })
  .catch((error: string) => log.logServerError(error))
