import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9B8B7E',
        secondary: '#7A6B5D',
        accent: '#D4C4B0',
        'soft-bg': '#F5F3F0',
        'text-dark': '#2C2C2C',
        'text-light': '#6B6B6B',
        'border-light': '#E5E1DC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;