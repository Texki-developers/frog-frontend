/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/styles/*.css",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  safelist: [],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#b3d7ff",
          100: "#80bcff",
          200: "#4da2ff",
          300: "#007aff",
          400: "#006ee6",
        },
        successGreen: "#4BB543",
        failureRed: "#FC100D",
        grey: {
          50: "#f2f2f3",
          100: "#d7d7db",
          200: "#bcbcc3",
          300: "#a1a1aa",
          400: "#868692",
          500: "#6d6d79",
          600: "#55555e",
        },
      },
      keyframes: {
        expandWidth: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        expandWidth: "expandWidth 2s ease-in-out",
      },
      anitmationDelay: {
        0: "0ms",
        250: "250ms",
        500: "500ms",
        750: "750ms",
        1000: "1000ms",
      },
    },
  },
  plugins: [],
};
