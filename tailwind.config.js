/** @type {import('tailwindcss').Config} */
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
