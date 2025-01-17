/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/**/*.{html,js}"],
  presets: [require('./src/tailwind-preset.js')],
  theme: {
    extend: { 
      colors: {
        pale_orange: '#ffd9a6',
        light_orange: '#fbb03b',
        orange: '#f7931e'
      },
      fontFamily: {
        sans:['Josefin Sans', 'sans-serif'],
        title: ['Playfair Display SC', 'serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top right, #fbb03b,  #f7931e)',
        'custom-gradient1': 'linear-gradient(to bottom left, #f7931e, #fbb03b )',
        mobile:("url('./jbg-mobile.png')"), 
        desktop:("url('./jbg-desktop.png')")
      },  
    },
  },
  plugins: [],
}