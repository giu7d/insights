import baseConfig from '@insights/tooling-jest/base'

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  ...baseConfig,
  preset: 'jest-expo',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.test.{js,jsx,ts,tsx}',
  ],
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
}

export default config
