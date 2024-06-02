jest.setTimeout(30000)

// Setup environment variables
jest.mock('@/services/env', () => ({
  ENV: 'development',
  API_HOST: 'localhost',
  API_PORT: '3000',
  DEBUGGER_HOST: 'localhost',
  isProductionEnv: () => false,
}))
