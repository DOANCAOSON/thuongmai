/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1DC071',
        'text-color': '#808191',
        violet: '#6F49FD'
      }
    },
    screens: {
      mobile: { min: '350px', max: '450px' }
    }
  },
  plugins: []
}
