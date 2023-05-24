/* eslint-disable no-undef */
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
      "cupcake",
      {
        business: {
          ...require("daisyui/src/colors/themes")["[data-theme=business]"],
          primary: "#09A091",
        },
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
        lighter: {
          primary: "#1d9bf0",
          secondary: "#f7f7f7",
          accent: "#8ecdf7",
          neutral: "#2a2e37",
          "base-100": "#ffffff",
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
