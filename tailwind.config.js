/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
      }
    },
    extend: {
      screens: {
        mb: { min: "0", max: "767px" },
        tb: { min: "768px", max: "1024px" }

      },
      fontFamily: {
        "barlow": "Barlow, sans-serif",
        "fra": "Fraunces, sans-serif"
      }
    },
  },
  plugins: [],
}

