/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fotobir': "url('./src/assets/react.png')"
      },
      fontFamily: {
        logofont: ["Comfortaa"],
        fontiki: ["M PLUS Code Latin"],
      },
    },
  },
  plugins: [],
};
