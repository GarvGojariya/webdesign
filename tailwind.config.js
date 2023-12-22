/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./Images/Rectangle1.png')",
        'fram2' : "url('./Images/Frame2.png')",
        'substract' : "url('./Images/Subtract.png')"
      }
    },
  },
  plugins: [],
}

