/** @typedef {import("prettier").Options} PrettierOptions */
/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig } */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn', 'cva'],
  // General
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  // Extra
  overrides: [
    {
      files: '*.json.hbs',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.js.hbs',
      options: {
        parser: 'babel',
      },
    },
  ],
}

export default config
