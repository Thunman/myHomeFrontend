/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      mixBlendMode: {
        difference: 'difference',
      },
      boxShadow: {
        glow: '0 0 50px #0f0',
      },
    },
  },
  plugins: [],
}