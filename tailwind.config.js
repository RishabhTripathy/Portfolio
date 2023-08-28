/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
        sans: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],

        Montserrats: ["Montserrat", "sans-serif"],
      },
  },
  plugins: [require("daisyui")],
}
