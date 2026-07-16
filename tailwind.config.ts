import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "hsl(240 10% 4%)",
          soft: "hsl(240 8% 8%)",
          card: "hsl(240 6% 11%)",
        },
        ink: {
          DEFAULT: "hsl(240 10% 96%)",
          muted: "hsl(240 5% 65%)",
          faint: "hsl(240 5% 45%)",
        },
        line: "hsl(240 5% 20%)",
        accent: {
          DEFAULT: "#A78BFA",
          hover: "#7C3AED",
          soft: "rgba(167, 139, 250, 0.12)",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Inter", "sans-serif"],
        display: ["ui-sans-serif", "system-ui", "-apple-system", "Inter", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "monospace"],
      },
      maxWidth: {
        container: "72rem",
        prose: "42rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
