/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "3/4screen": "75vh"
      },
      width: {
        "3/4screen": "75vw"
      },
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