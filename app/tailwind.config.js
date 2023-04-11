/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      lineHeight: {},
      aspectRatio: {
        "4/3": "4 / 3",
      },
      flexBasis: {},
      backgroundColor: {
        default: "#F8F8F8",
      },
    },
    plugins: [],
  },
};
