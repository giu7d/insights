import supertokens from 'supertokens-node/index.js'
import Dashboard from 'supertokens-node/recipe/dashboard/index.js'
import Passwordless from 'supertokens-node/recipe/passwordless/index.js'
import Session from 'supertokens-node/recipe/session/index.js'

import env from '@/env'

supertokens.init({
  framework: 'fastify',
  supertokens: {
    connectionURI: env.SUPERTOKENS_CORE_URI,
    // apiKey: env.SUPERTOKENS_API_KEY TODO: Enable api key
  },
  appInfo: {
    appName: 'splitter',
    apiDomain: env.SUPERTOKENS_API_DOMAIN_URI,
    websiteDomain: env.SUPERTOKENS_WEB_DOMAIN_URI,
    apiBasePath: '/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [
    Passwordless.init({
      flowType: 'USER_INPUT_CODE',
      contactMethod: 'EMAIL',
    }),
    Session.init(),
    Dashboard.init(),
  ],
})

export const authCorsHeaders = supertokens.getAllCORSHeaders()

export const authSession = Session

export { plugin as authPlugin } from 'supertokens-node/framework/fastify/index.js'

export { errorHandler as authErrorHandler } from 'supertokens-node/framework/fastify/index.js'
