/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      perspective: {
        1000: "1000px"
      },
      rotate: {
        "y-180": "rotateY(180deg)"
      },
      backfaceVisibility: {
        hidden: "hidden"
      }
    },

    fontFamily: {
      signature: ["Great Vibes"],
      jost: ["Jost", "sans-serif"]
    }
  },
  plugins: [require("daisyui")]
};
