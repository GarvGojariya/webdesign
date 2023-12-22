/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./assts/images/images/Rectangle1.png')",
        'fram2' : "url('./assts/images/images/Frame2.png')",
        'substract' : "url('./assts/images/images/Subtract.png')",
        'footer':"url('./assts/images/images/Footer.png')",
        'servicesbg' : "url('./assts/images/images/ServicesBG.png')"
      }
    },
  },
  plugins: [],
}

