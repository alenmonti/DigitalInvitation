/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        'black': '0px 0px 12px -2px rgba(87,87,87,0.5)',
        'full': '0 0 490px 2000px rgba(30,30,30,0.8)',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
        'play': ['Playfair Display', 'serif'],
        'dance': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}