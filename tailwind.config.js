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
      backgroundImage: {
        badGradient:
          "linear-gradient(90deg, rgba(242,187,176,1) 0%, rgba(86,0,194,1) 33%, rgba(0,2,250,1) 66%, rgba(89,169,131,1) 100%);",
      },
      maxWidth: {
        700: "700px",
        800: "800px",
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
