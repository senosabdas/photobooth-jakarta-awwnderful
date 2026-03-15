/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide-left 35s linear infinite',
        'slide-right': 'slide-right 35s linear infinite',
        'gallery-slide-left': 'gallery-slide-left 0.5s ease-in-out',
        'gallery-slide-right': 'gallery-slide-right 0.5s ease-in-out',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'gallery-slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'gallery-slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        }
      },
    },
  },
  plugins: [],
} 