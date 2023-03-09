/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
        'view': { 'raw': 'view' },
        'header': { 'raw': 'header' },
    }
    },
  },
  plugins: [],
}