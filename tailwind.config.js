/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e5d3cc",
          "secondary": "#f4978e",
          "accent": "#37cdbe",
          "neutral": "#d9d9d9",
          "base-100": "#0b2030",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

