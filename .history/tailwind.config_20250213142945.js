module.exports = {
  content: [
     // Cập nhật đường dẫn file tùy theo dự án
  ],
  darkMode: "class", // or 'media' or 'class'
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
