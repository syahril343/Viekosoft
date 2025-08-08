/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A6B28B',
        secondary: '#1C352D',
        bgHover: '#F9F6F3',
      },
    },
  },
  plugins: [],
}

