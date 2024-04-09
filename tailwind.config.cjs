/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        'screen-dynamic': ['100vh', '100dvh'],
        'screen-small': ['100vh', '100svh'],
        'screen-large': ['100vh', '100lvh'],
      },
      height: {
        'screen-dynamic': ['100vh', '100dvh'],
        'screen-small': ['100vh', '100svh'],
        'screen-large': ['100vh', '100lvh'],
      },
      minWidth: {
        64: '16rem',
      },
      colors: {
        primary: {
          default: '#e74c3c',
          50: '#ffffff',
          100: '#fdf3f2',
          200: '#f9d1cd',
          300: '#f4b0a9',
          400: '#f08f85',
          500: '#eb6d60',
          600: '#e74c3c',
          700: '#d12b1a',
          800: '#9f2114',
          900: '#6d160d',
          950: '#54110a',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), 'prettier-plugin-tailwindcss'],
}
