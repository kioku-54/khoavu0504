/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offwhite: '#F7F6F3',
        charcoal: '#2C2C2C',
        teal: '#4A7C72',
        gridline: '#D8D6D0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #D8D6D0 1px, transparent 1px), linear-gradient(to bottom, #D8D6D0 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
