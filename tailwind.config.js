/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020617",
          900: "#0a1628",
          800: "#0f2744",
        },
        electric: {
          DEFAULT: "#00a2ff",
          cyan: "#00e5ff",
          glow: "#0080ff",
        },
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        display: ["Geist", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 8px 30px rgba(0, 0, 0, 0.28)",
        "neon-lg": "0 12px 42px rgba(0, 0, 0, 0.34)",
        "neon-blue": "0 4px 24px rgba(0, 162, 255, 0.35), 0 0 0 1px rgba(0, 162, 255, 0.15)",
        "neon-blue-lg": "0 8px 40px rgba(0, 162, 255, 0.5), 0 0 0 1px rgba(0, 162, 255, 0.25)",
        "card-hover": "0 0 0 1px rgba(0, 162, 255, 0.15), 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 50px rgba(0, 162, 255, 0.08)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,162,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 4.5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "spin-reverse": "spin-reverse 12s linear infinite",
      },
    },
  },
  plugins: [],
};
