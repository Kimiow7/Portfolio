import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0f1115",
          surface: "#14171c",
          raised: "#1a1f26",
        },
        accent: {
          green: "#22c55e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
