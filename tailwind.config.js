/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin"),
    require("tailwind-scrollbar-hide"),
  ],
  theme: {},
};
