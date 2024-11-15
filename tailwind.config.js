/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Adjust this to match your file structure
  ],
  theme: {
    extend: {
      colors:{
        primary:'#f97316'
      },
      fontFamily:{
        sans : ['Poppins','sans-serif'],
      },
      container:{
        center: true,
        padding:{
          DEFAULT : "1 rem",
          sm : "2rem",
          lg : "4rem",
          xl:"5rem",
         "2xl":"6rem",
        },
      },
    },
  },
  plugins: [],
}
