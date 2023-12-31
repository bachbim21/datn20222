/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        cp: "650px",
      },
      colors: {},
      lineHeight: {},
      screens: {
        mobile: "480px",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      backgroundColor: {
        custom: "#F8F8F8",
      },
    },
    plugins: [],
  },
  safelist: [
    {
      pattern:
        /border-(red|green|blue|pink|stone|orange|amber|yellow|lime|green|emerald|teal|cyan|indigo|violet|purple|rose|gray)-(100|200|300|400|500|600|700|800|900)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
    {
      pattern:
        /bg-(red|green|blue|pink|stone|orange|amber|yellow|lime|green|emerald|teal|cyan|indigo|violet|purple|rose|gray)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
    {
      pattern: /rounded-(md|lg|full|xl|2xl|3xl|t|r|l|b|s|e|ee|ss)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
  ],
};
