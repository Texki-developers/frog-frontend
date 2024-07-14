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
    },
  },
  plugins: [],
};
