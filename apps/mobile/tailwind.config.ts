import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  plugins: [],
  theme: {
    extend: {},
  },
} satisfies Config
