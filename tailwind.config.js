/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container:{
      center: true,
    }
  },
  plugins: [ require('flowbite/plugin')],
}

