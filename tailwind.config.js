/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#C4FFF9', // lightest
          200: '#9CEAEF',
          300: '#68D8D6',
          400: '#3DCCC7',
          500: '#07BEB8', // darkest
        }
      },
      fontFamily: {
        Poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      }
    },
  },
  plugins: [],
}

