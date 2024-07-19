/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
      },
      colors: {
        ...colors,
        "dark-blue": "#031A6B",
        "dark-green": "#52796F",
        "arg-blue": "#65AFFF",
        golden: "#FCEC52",
      },
    },
  },
  plugins: [],
});
