import { coelhoui } from '@coelho-ui/theme'
import tailwindScrollbar from 'tailwind-scrollbar'
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@coelho-ui/theme/{src,dist}/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [coelhoui(), tailwindScrollbar({})]
}

export default config
