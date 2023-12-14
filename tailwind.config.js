/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        optician: ["Optician Sans, sans-serif"],
        serif: ["Times"],
      },
      colors: {
        kleinBlue: "#0002FA",
        lightYellow: "#fffef7",
      },
      maxWidth: {
        700: "700px",
        900: "900px",
      },
      screens: {
        "md-750": "750px",
        "md-900": "900px",
        "xl-1400": "1400px",
      },
    },
  },
  plugins: [],
};
