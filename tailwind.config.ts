import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: {
      ink: "#17342F", paper: "#F7F7F1", card: "#FFFFFF",
      trust: { DEFAULT: "#0B7564", dark: "#075A4D", light: "#E5F4EE" },
      marigold: { DEFAULT: "#D99A36", dark: "#9B6213", light: "#FFF0D6" },
      go: { DEFAULT: "#14825C", light: "#E6F6EE" }, stop: { DEFAULT: "#BA4A42", light: "#FCEBE8" }, line: "#DCE7E0",
    },
    fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"], mono: ["var(--font-mono)", "monospace"] },
    borderRadius: { stamp: "14px" }, boxShadow: { card: "0 12px 35px rgba(23, 52, 47, 0.07)" },
  } },
  plugins: [],
};
export default config;
