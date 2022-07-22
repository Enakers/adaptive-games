/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        28: "7rem"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    theme: ["dark", "light"]
  }
};
