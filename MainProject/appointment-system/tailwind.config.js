/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // blue-600
        success: "#16a34a",   // green-600
        warning: "#eab308",   // yellow-500
        danger: "#dc2626",    // red-600
      },
    },
  },
  plugins: [],
};