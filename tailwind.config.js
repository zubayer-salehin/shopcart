module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFAE5D",
          secondary: "#000000",
          accent: "#fff8f5",
          neutral: "#2D2D2D",
          "base-100": "#ffffff",
        },
      },
      "white",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}