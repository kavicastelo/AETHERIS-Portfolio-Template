import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyan: {
          400: "var(--neon-cyan)",
          500: "#00d8e4", // slightly darker for base
        },
        magenta: {
          400: "var(--neon-magenta)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "float": "float 20s ease-in-out infinite",
        "scanline": "scanline 10s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        scanline: {
          "0%": { bottom: "100%" },
          "100%": { bottom: "-100px" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
