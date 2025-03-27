/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        '3xl': '0 10px 40px -15px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      }
    },
  },
  plugins: [],
}