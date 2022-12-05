/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9],
    },
  },
  variants: {
    aspectRatio: ["responsive"],
    extend: {},
  },
  plugins: [
    require("tailwindcss-aspect-ratio"),
    require("tailwindcss-responsive-embed"),
  ],
};
