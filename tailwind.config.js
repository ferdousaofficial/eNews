/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
        raleway: ["Raleway"],
      },
      colors: {
        main: "#7A8486",
        white: "#F1F1F1",
        buttonBg: "#95A5A6",
        textColor: "#3A4251",
        backgroundColor: "#D5DBDB",
        topicColor: "#9FACAD",
        activeColor: "#829092",
        darkBG: "#404949",
        darkTopicColor: "#EAF1F1",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
