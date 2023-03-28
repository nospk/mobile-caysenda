const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-google)', ...fontFamily.sans],
      },
      maxWidth:{
        '40px':'40px',
        '60px':'60px'
      },
      width:{
        '46vw':'46.4vw'
      },
      height:{
        '46vw':'46.4vw'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
