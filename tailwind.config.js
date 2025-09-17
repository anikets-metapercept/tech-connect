/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Open Sans"],
      },
      screens: {
        customWidth: { min: "1020px", max: "1340px" },
      },
      colors: {
        backgroundColor: "#000B21",
        textHover: "#fe5e45"
      },
    },
  },
  plugins: [],
};
