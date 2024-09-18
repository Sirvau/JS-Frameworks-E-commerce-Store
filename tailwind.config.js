/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          primary: ['Instrument Sans', 'sans-serif'],
          logo: ['Mouse Memoirs', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }