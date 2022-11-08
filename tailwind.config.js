/** @type {import('tailwindcss').Config} */
/** @type {@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400&display=swap");} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova"],
        Poppins: ["Poppins"],
      },
      keyframes:{
        "fade-up":{},
        "fade-down":{},
        "fade-left":{},
        "fade-right":{},
      },
      animation:{},
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
