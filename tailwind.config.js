/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      "phone" : {'min':'380px' , 'max':'400px'}
    },
    backgroundImage:{
      'background':"url('./image/background image')",
    }
  },
  plugins: [],
}

