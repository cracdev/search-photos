/** @type {import('tailwindcss').Config} */

const colors = require('./theme/colors.json');
const buttons = require('./plugins/tailwind-buttons.cjs');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [buttons],
}