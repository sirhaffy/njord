module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#000',
        'primary-hover': '#fhfhfh',
        'primary-hover': '#fyfyfy',
      },
    },
    fontFamily: {
      heading: ['"Open Sans"', 'Arial', 'sans-serif'],
      body: ['"Open Sans"', 'Arial', 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
