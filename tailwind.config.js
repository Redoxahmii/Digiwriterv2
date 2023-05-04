/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      "valentine",
      "business",
      {
        mytheme: {
          primary: "#52cebb",
          secondary: "#db7d02",
          accent: "#d637a4",
          neutral: "#221F37",
          "base-100": "#3B3B3B",
          info: "#54A8F2",
          success: "#76E0C0",
          warning: "#F2BE21",
          error: "#F50A49",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
