module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    "./components/**/*.{vue,js,ts,jsx,tsx}",// Đảm bảo Tailwind áp dụng cho tất cả file trong src
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-main": "#18191A",
        "dark-second": "#242526",
        "dark-third": "#3A3B3C",
        "dark-txt": "#b0b3b8",
        "second-txt": "#b0b3b8",
        "primary-button-background": "#0866ff",
        "primary-txt": "#e2e5e9",
        "test": "#ff5731"
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
