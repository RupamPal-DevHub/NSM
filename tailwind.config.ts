/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F", // Custom primary color
        secondary: "#1A1A1A", // Custom secondary color
        accent: "#4B4B4B", // Custom accent color
        textDark: "white",
        textlight: "black",
        primaryLight: "#E8E8E8", // Custom primary color
        secondaryLight: "#D6D6D6", // Custom secondary color
        accentLight: "#BDBDBD", // Custom accent color
        primaryDark: "#0F0F0F", // Custom primary color
        secondaryDark: "#1A1A1A", // Custom secondary color
        accentDark: "#4B4B4B", // Custom accent color
        blueBox: "#7388FF", // Custom gray color
        redBox: "#FD888A",
      },
    },
  },
  plugins: [],
};
