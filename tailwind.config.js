/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      keyframes:{
        'spin':{
          from: {transform: 'rotate(0deg)'},
          to: { transform: 'rotate(360deg)'}
        }
      },
      animation: {
        'spin': '10s linear spin infinite'
      }
    },
    plugins: [],
  }
}
