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
        black: "#0a0a0a",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F9E076",
          dark: "#B8962E",
        },
        white: "#FAFAFA",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F9E076 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #F9E076 0%, #D4AF37 100%)",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)",
      },
      boxShadow: {
        "gold": "0 4px 24px -4px rgba(212, 175, 55, 0.25)",
        "gold-lg": "0 20px 50px -15px rgba(212, 175, 55, 0.2)",
        "gold-glow": "0 0 60px -10px rgba(212, 175, 55, 0.15)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
