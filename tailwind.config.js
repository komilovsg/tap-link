/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#016fee',
          DEFAULT: '#006fee',
          dark: '#006fee',
        },
        secondary: {
          light: '#a278f8',
          DEFAULT: '#7E3FFC',
          dark: '#7E3FFC',
        },
        success: '#41c97c',
        warning: {
          light: '#f5a525',
          DEFAULT: '#f5a524',
        },
        danger: '#f31260',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
