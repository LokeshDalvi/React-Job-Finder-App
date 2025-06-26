/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Navy Blue
        primary: {
          50: "#f0f4ff",
          100: "#d9e2ff",
          200: "#b3c6ff",
          300: "#8daaff",
          400: "#678eff",
          500: "#03256C", // Your main dark blue
          600: "#021d55",
          700: "#01153d",
          800: "#010e26",
          900: "#00070e",
        },
        // Secondary Cobalt Blue
        secondary: {
          500: "#2541B2", // Your card title color
        },
        // Accent Cyan
        accent: {
          300: "#06BEE1", // Your logo color
          400: "#05a8c7",
          500: "#0492ad",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Modern font recommendation
      },
      boxShadow: {
        "job-card":
          "0 4px 6px -1px rgba(2, 37, 108, 0.1), 0 2px 4px -2px rgba(2, 37, 108, 0.1)",
      },
    },
  },
  plugins: [
  ],
};
