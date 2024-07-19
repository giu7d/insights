import env from '@/env'
import Log from '@/utils/log'
import endpoint from '@/web/endpoint'

endpoint
  .listen({ host: env.API_HOST, port: env.API_PORT })
  .then(() => Log.serverStart())
  .catch((error: string) => Log.serverError(error))
