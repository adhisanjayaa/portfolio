/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'cormorant': ['Cormorant'],
      'nanum': ['Nanum']
    },
    extend: {
      colors: {
        primary: '#0a0908',
        secondary: '#f2f4f3',
        success: '#28A745',
        warning: '#FFC107',
        danger: '#DC3545',
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [],
}

