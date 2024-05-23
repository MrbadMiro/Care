

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        Orange: "#ff5528",
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      keyframes: {
        'shakeX-slow': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        'bounce-slow': ' bounce 3s linear infinite',
        'pulse-slow': ' pulse 3s linear infinite',
        'shakeX-slow':' shakeX 3s linear infinite ',
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tailwind-animatecss'),
    require("tailwindcss-debug-screens"),
  ],
}
