/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        bgColor: "#141414",
        textColor: "#FDFFFC",
        playerColor: "#ED1C24",
        coinColor: "#F1D302",
        enemyColor: "#0081A7",
        gridColor: "#292929",
        heartColor: "#ff69b4",
      },
    },
  },
  plugins: [],
};
