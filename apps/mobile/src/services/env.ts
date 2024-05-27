import Constants from 'expo-constants'
import z from 'zod'

export function isProductionEnv(env: 'development' | 'production') {
  return env === 'production'
}

const schema = z.object({
  ENV: z.union([z.literal('development'), z.literal('production')]),
  API_HOST: z.string(),
  API_PORT: z.string(),
  DEBUGGER_HOST: z.string(),
})

export default schema.parse({
  ...Constants.expoConfig?.extra,
  DEBUGGER_HOST: Constants.expoConfig?.hostUri?.split(':').at(0) ?? '',
})
