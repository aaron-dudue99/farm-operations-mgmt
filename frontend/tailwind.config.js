/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'green-primary': '#B2D6BA',
      'green-secondary': '#033323',
      'red': 'FF5E5E',
      'orange-primary': '#D4A936',
      'orange-secondary': '#F7C500',
      'gray': '#F3F1EF',
      'wgite': '#FFFFFF',
    },

    fontFamily: {
      sans: ["Open Sans", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
