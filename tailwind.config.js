/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryBackground': '#141413',
  
      },
      keyframes: {
        fadeSlideIn: {
          "0%": { opacity: 0, transform: "translateX(-50%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeSlideIn: "fadeSlideIn 1s ease-out forwards",
        underline: 'underline 0.3s ease-in-out forwards'
      },
     fontFamily:{
      'sans': ['Montserrat', 'Arial', 'sans-serif'],
      'space': ['Space Grotesk', 'sans-serif'],
      'mono': ['JetBrains Mono', 'monospace'],
      'display': ['Montserrat', 'sans-serif']
     },
     animation: {
      fadeSlideIn: "fadeSlideIn 1s ease-out forwards",
      underline: 'underline 0.3s ease-in-out forwards'
     }
    },
  },
  plugins: [],
}

