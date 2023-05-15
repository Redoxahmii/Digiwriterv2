/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        instagram: ["Just Another Hand", "cursive"],
      },
    },
  },
  daisyui: {
    themes: [
      "valentine",
      "business",
      "aqua",
      "dark",
      "forest",
      {
        skin: {
          primary: "#93628f",
          secondary: "#f3decd",
          accent: "#4a2849",
          neutral: "#2a2e37",
          "base-100": "#f9eeea",
          info: "#65ADF6",
          success: "#12633F",
          warning: "#F1C309",
          error: "#FC3C27",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
