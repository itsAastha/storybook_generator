/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        playwrite: ['"Playwrite NG Modern"', 'cursive'],
      },
      colors: {
        white: '#FFFFFF',
      },
      // Add custom font weights and classes
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
      },
    },
  },
  plugins: [],
}
