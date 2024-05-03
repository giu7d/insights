import { server } from './setupMSW'
import SetupJestFetch from 'jest-fetch-mock'

jest.setTimeout(30000)

SetupJestFetch.enableMocks()

// @ts-expect-error
global.window = {}

// @ts-expect-error
global.window = global

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => server.close())
