/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", 
        surface: "#121212",
        primary: {
          DEFAULT: "#00FF94", 
          hover: "#00CC76",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#333333",
          glow: "rgba(0, 255, 148, 0.5)", 
        },
        muted: "#888888",
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glitch": "glitch 1s linear infinite",
      },
    },
  },
  plugins: [],
};