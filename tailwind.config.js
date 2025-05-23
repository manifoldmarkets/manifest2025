/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-body)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        heading: ['var(--font-heading)', 'sans-serif'],
      },
      colors: {
        ink: {
          0: 'rgb(255 255 255 / <alpha-value>)',
          100: 'rgb(236 237 248 / <alpha-value>)',
          900: 'rgb(22 21 55 / <alpha-value>)',
        },
        canvas: {
          0: 'rgb(253 254 255 / <alpha-value>)',
        },
        primary: {
          400: 'rgb(165 180 252 / <alpha-value>)',
          600: 'rgb(129 140 248 / <alpha-value>)',
          700: 'rgb(99 102 241 / <alpha-value>)',
          800: 'rgb(80 82 237 / <alpha-value>)',
          900: 'rgb(60 63 231 / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}
