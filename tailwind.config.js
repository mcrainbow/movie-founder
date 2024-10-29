/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Основные цвета
        primary: {
          light: "#ff5722", // оранжевый
          default: "#ff9800", // янтарный
          dark: "#f57c00", // темно-оранжевый
        },
        secondary: {
          light: "#cfd8dc", // светло-серый
          default: "#b0bec5", // серый
          dark: "#90a4ae", // темно-серый
        },
        accent: {
          light: "#ffeb3b", // желтый
          default: "#ffc107", // янтарный
          dark: "#ffa000", // темно-янтарный
        },
        // Фоновые цвета
        background: {
          light: "#ffffff", // белый
          default: "#f5f5f5", // светло-серый
          dark: "#eeeeee", // серый
        },
        // Текстовые цвета
        text: {
          light: {
            default: "#212121", // черный
            secondary: "#757575", // серый
          },
          default: {
            default: "#ffffff", // белый
            secondary: "#bdbdbd", // светло-серый
          },
          dark: {
            default: "#ffffff", // белый
            secondary: "#bdbdbd", // светло-серый
          },
        },
        // Наведенные цвета
        hover: {
          light: "#f5f5f5", // светло-серый
          default: "#e0e0e0", // серый
          dark: "#bdbdbd", // темно-серый
        },
      },

      fontFamily: {
        sans: ["Merriweather", "sans-serif"],
      },
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
