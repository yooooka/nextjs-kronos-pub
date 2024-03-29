/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mplus: ["var(--font-m-plus-1p)"],
        outfit: ["var(--font-outfit)", "var(--font-m-plus-1p)"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "#fdb378",
          DEFAULT: "#f96416",
          dark: "#D5410B", // adjusted for WCAG
        },
        secondary: {
          light: "#b2ddd0",
          DEFAULT: "#408c7b",
          dark: "#317062",
        },
        "macaroni-and-cheese": {
          50: "#fff6ed",
          100: "#ffead5",
          200: "#fed1aa",
          300: "#fdb378",
          400: "#fb853c",
          500: "#f96416",
          600: "#ea490c",
          700: "#c2350c",
          800: "#9a2b12",
          900: "#7c2612",
          950: "#431007",
        },
        neptune: {
          50: "#f3faf7",
          100: "#d9eee7",
          200: "#b2ddd0",
          300: "#78bfab",
          400: "#5aa793",
          500: "#408c7b",
          600: "#317062",
          700: "#2b5a51",
          800: "#264943",
          900: "#233e39",
          950: "#102321",
        },
        kronos: {
          light: "#cfcb87",
          DEFAULT: "#AD9D19",
          dark: "#907918",
          50: "#f8f6ed",
          100: "#f0eed7",
          200: "#e2dfb4",
          300: "#cfcb87",
          400: "#bab761",
          500: "#AD9D19",
          600: "#907918",
          700: "#78601b",
          800: "#66501d",
          900: "#3b2b0d",
          950: "#23240f",
        },
      },
      animation: {
        bounce: "bounce 1s ease 10",
      },
    },
    backgroundSize: {
      85: "85%",
      90: "90%",
      150: "150%",
      200: "200%",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
