/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Make sure this matches your folder structure

  safelist: [
    {
      pattern: /(from|to)-(blue|cyan|green|emerald|purple|pink|orange|red|indigo)-[0-9]{3}/,
    },
  ],

  theme: {
    extend: {
      animation: {
        'scroll-x': 'scrollX 40s linear infinite',
        'scroll-reverse': 'scrollReverse 40s linear infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Added this line
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        // Added this keyframe
        'pulse-slow': {
          '0%, 100%': { opacity: '0.75' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },

  plugins: [],
};