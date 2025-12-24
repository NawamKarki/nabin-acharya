module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
        lato: ["Lato", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#002049",
      },
    },
  },
  plugins: [],
};
