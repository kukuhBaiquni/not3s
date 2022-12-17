/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        titillium: ['Titillium Web'],
      },
      colors: {
        ...colors,
        primary: '#b64a99',
        secondary: '#0f223d',
      },
    },
  },
  plugins: [],
}
