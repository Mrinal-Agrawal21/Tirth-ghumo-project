/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // adjust if your files are in different folders
    ],
    theme: {
      extend: {
        fontFamily: {
          island: ['"Island Moments"', "cursive"], // ✅ custom font
        },
      },
    },
    plugins: [],
  }
  