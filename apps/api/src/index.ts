import env from '@/env'
import log from '@/utils/log'
import endpoint from '@/web/endpoint'

endpoint
  .listen({ host: env.API_HOST, port: env.API_PORT })
  .then(() => {
    // console.clear()
    log.logServerStart()
  })
  .catch((error: string) => log.logServerError(error))
