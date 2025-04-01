module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    "./components/**/*.{vue,js,ts,jsx,tsx}",// Đảm bảo Tailwind áp dụng cho tất cả file trong src
  ],
  darkMode: "class",
  
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
