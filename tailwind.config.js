/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/js/view/view.js",
    "./src/js/view/resultView.js",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: "#207178",
        secondary: "#FF9666",
      }),
    },
    plugins: [],
  },
};
