import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow": "#F4D04E",
        "gray-950": "#111111",
        "gray-500": "#6B6B6B"
      },
      spacing: {
        "50": "4px",
        "100": "8px",
        "150": "12px",
        "300": "24px"
      },
      fontFamily: {
        "sans": ["Figtree"]
      },
      fontSize: {
        "2xl": ["24px", "1.5"],
        "xl": ["16px", "1.5"],
        "base": ["14px", "1.5"]
      },
    }
  }
} satisfies Config;
