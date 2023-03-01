/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cardOverlay:'rgba(256,256,256,0.4)',
        cartBg:'#282a2c',
        cartItem:"#2e3033",
        cartTotal:"#343739",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}