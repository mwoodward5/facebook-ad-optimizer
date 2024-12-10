/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1B1B1B",
        primary: "#FD7913",
        text: "#BDBEC0",
      },
    },
  },
  plugins: [],
};
