/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: true,
  mode: "jit",
  prefix: "rd-appstore-",
  theme: {
    extend: {},
  },
  plugins: [],
}
