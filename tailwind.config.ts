import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0C1015",
        panel: "#131A22",
        panel2: "#18222E",
        line: "#263140",
        ink: "#E9EDF2",
        muted: "#A9B4C2",
        faint: "#7F8B99",
        accent: "#B8F26A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
