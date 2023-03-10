/** @type {import('tailwindcss').Config} */
// const themeColor = {
//   primary: {
//     bgColor: "#dfc500",
//     color: "#dfc500",
//   },
//   secondary: {
//     bgColor: "#242424",
//     color: "#242424",
//   },
//   white: {
//     bgColor: "#ffffff",
//     color: "#ffffff",
//   },
//   light: {
//     bgColor: "#d9d9d9",
//     color: "#cecaca",
//   },
// };
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#dfc500",
        "secondary-color": "#242424",
        "primary-white": "#ffffff",
        "primary-shade": "#dfc50046",
      },
      backgroundImage: {
        "primary-linearColor":
          "linear-gradient(180deg, #DFC500 0%, #FBC02A 100%)",
        "primary-hoverLinearColor":
          "linear-gradient(180deg, #FDE000 0%, #FFB700 100%)",
      },
      boxShadow: {
        "nav-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
