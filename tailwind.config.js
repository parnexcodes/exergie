/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend:
    {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
};