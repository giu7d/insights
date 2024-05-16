import { createEnv } from '@t3-oss/env-core'
import * as z from 'zod'

export default createEnv({
  server: {
    SUPERTOKENS_CORE_URI: z.string(),
    SUPERTOKENS_API_DOMAIN_URI: z.string(),
    SUPERTOKENS_WEB_DOMAIN_URI: z.string(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
