/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        5: "0 0 30px -15px rgba(0, 0, 0, 0.3)",
        6: "0 10px 40px -15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
}
