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
      },
    },
  },

  plugins: [],
};
