/** @typedef {import('ts-jest').JestConfigWithTsJest} JestConfig */

/** @type {JestConfig} */
const config = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/config/setupJest.ts'],
}

export default config
