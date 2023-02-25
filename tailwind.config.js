/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#161724",
        card: "#23243b",
        border: "#474866",
        link: "#636bce",
      },
      fontFamily: {
        sans: ["Ubuntu", "Sans-Serif"],
      },
    },
  },
  plugins: [],
};
