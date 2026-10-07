import type { Config } from 'tailwindcss'
import base from './tailwind.config'

// Dev-only config for mockups.html (see src/mockups/mockups.css). It reuses the portfolio
// token names but resolves every color and font from CSS variables, so each project's
// screens render in that project's own theme (set per screen in src/mockups/themes.ts).
const colors = Object.fromEntries(
  Object.keys(base.theme.extend.colors).map((name) => [name, `rgb(var(--m-${name}) / <alpha-value>)`]),
)
const font = ['var(--m-font)', 'system-ui', 'sans-serif']
const fontFamily = Object.fromEntries(Object.keys(base.theme.extend.fontFamily).map((name) => [name, font]))

export default {
  content: ['./src/mockups/**/*.{ts,tsx}'],
  theme: {
    extend: {
      ...base.theme.extend,
      colors,
      fontFamily,
    },
  },
  plugins: [],
} satisfies Config
