/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Mosk-Extra-Bold': ['Mosk-Extra-Bold'],
      'Mosk-Bold': ['Mosk-Bold'],
      'Mosk-Extra-Light': ['Mosk-Extra-Light'],
      'Mosk-Light': ['Mosk-Light'],
      'Mosk-Medium': ['Mosk-Medium'],
      'Mosk-Normal': ['Mosk-Normal'],
      'Mosk-Semi-Bold': ['Mosk-Semi-Bold'],
      'Mosk-Thin': ['Mosk-Thin'],
      'Mosk-Ultra-Bold': ['Mosk-Ultra-Bold'],
      'Jenthill': ['Jenthill'],

    },
    extend: {
      boxShadow: {
        'bx': '8px 8px 0px 0px #fff',
      }
    },
  },
  plugins: [],
}
