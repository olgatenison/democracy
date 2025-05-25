// tailwind.config.js

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["var(--font-eb-garamond)"],
        playfair: ["var(--font-playfair)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};

export default config;
