/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "size-y-200": "100% 200%",
      },
      backgroundImage: {
        "white-to-green":
          "linear-gradient(to bottom,#FFFFFF 0,#FFFFFF 45%,#93ff75 100%)",
      },
      backgroundPosition: {
        "position-y-0": "100% 0",
        "position-y-100": "100% 100%",
      },
    },
  },
  plugins: [],
};
