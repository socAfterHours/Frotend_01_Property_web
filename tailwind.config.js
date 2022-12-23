/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ligth theme
        primary: "#03628C",
        secondary: "#6CA3BB",
        tertiary: "#FBBF24",
        'hot-prop': "#FE4B61",

        'bold-text': '#152C36',
        'content-text': '#596275',

        light: '#EAEEF3',

        // Dark theme
        'dark-primary': '#03628C',
        'dark-secondary': '#6CA3BB',
        'dark-tertiary': '#FBBF24',
        'dark-hot-prop': "#FE4B61",

        'dark-bold-text': '#152C36',
        'dark-content-text': '#596275',

        'dark': '#EAEEF3',
      },
    },
  },
  plugins: [require("daisyui")],
}
