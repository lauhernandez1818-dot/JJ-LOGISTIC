import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#101010",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F9E076",
          dark: "#D4AF37",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F9E076 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #F9E076 0%, #D4AF37 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
