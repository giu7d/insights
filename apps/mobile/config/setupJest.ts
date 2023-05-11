import { server } from '@config/setupMSW'
import SetupJestFetch from 'jest-fetch-mock'

jest.setTimeout(30000)

SetupJestFetch.enableMocks()

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => server.close())
