/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      torus: ["Torus", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      dark: "#1A0901",
      primary: "#F25B0A",
      green: "#64961A",
      white: "#ffffff",
      black: "#000000",
      gray: {
        light: "#D1CBC9",
        DEFAULT: '#948D8A',
      }
    }
  },
  plugins: [],
}

