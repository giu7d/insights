/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/config/setupJest.ts'],
}

export default config
