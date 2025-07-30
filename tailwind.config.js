/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // optional custom shades if you want more control
        luchiRed: "#ff0000",
        luchiGreen: "#00aa00",
        luchiYellow: "#ffcc00",
        luchiWhite: "#ffffff",
         gold: '#FFD700', 
      },
    },
  },
  plugins: [],
};
