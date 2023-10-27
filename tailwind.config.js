/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      height:{
        screenNav:'calc(100vh - 3.5rem)'
      },
      colors: {
        primary: '#F2F8FF',
        background:'#F3F6FA',
        grayish: "#B8B8B8",
        abraBlue: "#121F3F",
        abraOrange : "#FF7748",
        darkPrimary: "#272727",
        invertedPrimary: "#e3e3e3",
        darkSecondary : "#1C1C1C",
        darkBackgroud : "#000000"
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "960px",
        lg: "1200px",
        xl: "1440px",
      },
      fontSize: {
        xs: '0.5rem',
        sm: '0.7rem',
        md: '0.9rem',
        lg: '1.1rem',
        xl: '1.3rem'
      }

      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  plugins: [],
}

