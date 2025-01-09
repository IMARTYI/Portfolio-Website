/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeSlideIn: {
          "0%": { opacity: 0, transform: "translateX(-50%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        fadeSlideIn: "fadeSlideIn 1s ease-out forwards",
      },
     fontFamily:{
      'sans': ['Montserrat', 'Arial', 'sans-serif'],
      'Abril Fatface': ['','']
     }
    },
  },
  plugins: [],
}

