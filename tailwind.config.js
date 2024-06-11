/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url(src/Components/images/bg3.webp)",
      },
         boxShadow: {
        'blue-glow': '0 4px 6px rgba(0, 0, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
