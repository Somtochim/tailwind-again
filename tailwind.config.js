// filepath: /c:/Users/DELL/Documents/Tailwind Starter/tailwind-again/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pale_orange: '#ffd9a6',
        light_orange: '#fbb03b',
        orange: '#f7931e'
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        title: ['Playfair Display SC', 'serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top right, #fbb03b, #f7931e)',
        'custom-gradient1': 'linear-gradient(to bottom right, #fbb03b, #f7931e)',
      },
    },
  },
  plugins: [],
}