/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
      './src/**/*.css',

    ],
    theme: {
      extend: {
        fontFamily: {
          primary: ['Instrument Sans', 'sans-serif'],
          logo: ['Mouse Memoirs', 'sans-serif'],
        },
        colors: {
          'light-beige': '#F5F1EB',
          'dark-brown': '#3B2009',
          'oak-brown': '#6F390D',
          'md-beige': '#EBE3D8',
          'light-orange': '#EFBE95',
          'filter-brown': '#706256',
          'button-hover': '#6F390D'
        },
       
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }