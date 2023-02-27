/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1DC071',
        'text-color': '#808191',
        textColor4: '#B2B3BD',
        violet: '#6F49FD',
        bgPrimary: '#4ACD8D',
        secondary: '#8C6DFD',
        textColorwhite: '#FFFFFF'
      }
    },
    screens: {
      mobile: { min: '350px', max: '450px' }
    }
  },
  plugins: []
}
