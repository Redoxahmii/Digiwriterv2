/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      ".spline-container": {
        opacity: 0,
        transition: "opacity 1s ease-in-out",
      },
      ".spline-loaded .spline-container": {
        opacity: 1,
      },
    },
  },
  plugins: [require("daisyui")],
};
