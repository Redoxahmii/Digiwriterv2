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
    themes: ["valentine", "business", "aqua"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
