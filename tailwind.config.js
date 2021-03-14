module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './assets/**/*.svg',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('tailwindcss-textshadow'),
    // require('tailwind-hamburgers'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
