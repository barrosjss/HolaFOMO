/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales de FOMO
        primary: '#F95F2E',
        secondary: '#736CED',
        dark: '#2D2A29',
        
        // Serie Naranja
        orange: {
          100: '#FFB394',
          200: '#FF9670',
          300: '#FF7A4D',
          400: '#F95F2E',
          500: '#E54718',
        },
        
        // Serie Púrpura
        purple: {
          100: '#C5BFFC',
          200: '#ADA5F7',
          300: '#9088F2',
          400: '#736CED',
          500: '#5B54D9',
        },
        
        // Colores neutrales
        white: '#FFFFFF',
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
