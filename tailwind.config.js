/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39469B",
        secondary: "#F4E6D7",
      },
      fontFamily: {
        serif: ["Fromage, serif"],
        sans: ["Montserrat, sans-serif"],
      },
    },
  },
  plugins: [],
};
