/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light_gray: "#5b626b",
        light_white: "#e6e6e6",
        light_bg: "#f0f3fb",
        body_color: "rgba(0, 0, 0, 0.87)",
        danger: "#dc3545",
        primary: "#0d6efd",
        success: "#198754",
      },
      fontFamily: {
        primary: "'Roboto', sans-serif",
      },
    },
  },

  plugins: [],
};
