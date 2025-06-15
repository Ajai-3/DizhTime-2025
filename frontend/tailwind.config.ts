import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-color": "#95bc1d",
        gray: {
          900: "#000000", 
        },
      },
    },
  },
  plugins: [],
};

export default config;
