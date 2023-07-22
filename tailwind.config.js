/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#F6F1E9",
        lightGray: "#B0A4A4",
        pink: "#FFF4F4",
        darkGray: "#323232",
        creamYellow: "#F7E6C4",
        darkPurple: "#0C317A",
        rosered: "#FF3434",
        chocolate: "#967E76",
      },
      fontFamily: {
        gasoek: ["Gasoek One", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
