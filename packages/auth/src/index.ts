import { plugin } from 'supertokens-node/framework/fastify/index.js'
import { errorHandler as withAuthenticationErrorHandler } from 'supertokens-node/framework/fastify/index.js'
import supertokens from 'supertokens-node/index.js'
import Dashboard from 'supertokens-node/recipe/dashboard/index.js'
import Passwordless from 'supertokens-node/recipe/passwordless/index.js'
import Session from 'supertokens-node/recipe/session/index.js'

import env from '@/env'

supertokens.init({
  framework: 'fastify',
  supertokens: {
    connectionURI: env.SUPERTOKENS_CORE_URI,
    // TODO: Enable api key
    // apiKey: env.SUPERTOKENS_API_KEY
  },
  appInfo: {
    appName: 'insights',
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

const allowedHeaders = supertokens.getAllCORSHeaders()

export default {
  allowedHeaders,
  getSession: Session.getSession,
  withAuthenticationPlugin: plugin,
  withAuthenticationErrorHandler,
}
