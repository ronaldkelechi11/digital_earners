/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(43,8,76)",
        secondary: "rgb(255,191,67)"
      },
      fontFamily: {
        roman: "Times New Roman"
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}

