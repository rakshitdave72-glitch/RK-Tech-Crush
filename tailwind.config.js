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
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Rajdhani", "Inter", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 162, 255, 0.35)",
        "neon-lg": "0 0 40px rgba(0, 162, 255, 0.45)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,162,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,255,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
