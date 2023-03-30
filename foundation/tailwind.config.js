/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)'],
        graphik: ['Graphik', 'sans-serif'],
        graphikBold: ['Graphik-bold', 'sans-serif'],
        graphikSemiBold: ['Graphik-semi-bold', 'sans-serif'],
        graphikExtralight: ['Graphik-extralight', 'sans-serif'],
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },
    screens: {
      xs: "360px",
      xss: "390px",
      ss: "620px",
      sm: "768px",
      mid: "850px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}