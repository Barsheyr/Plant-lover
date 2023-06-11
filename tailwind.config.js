/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Oldstandard: ["Old Standard TT", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Cursor: ["Over the Rainbow", "cursive"],
        Inter: ["Inter", "sans-serif"],
        Opensans: ["Opensans", "sans-serif"],
      },
      colors: {
        circleColor: "#4C544F",
        smallParagraph: "#717171",
        headerColor: "#131814",
        bestCollectionColor: "BFD5BB",
        greenish: "#24331C",
        lightgreen: "#6DAD84",
      },
    },
  },
  plugins: [],
};
