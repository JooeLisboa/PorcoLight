import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        ember: {
          50: "#F7E7D3",
          100: "#EED8BF",
          500: "#B6461E",
          600: "#8F3417",
          700: "#5B3A2A",
          900: "#1C120D"
        },
        gold: {
          400: "#E7B85C",
          500: "#D98B2B"
        }
      },
      boxShadow: {
        elegant: "0 22px 50px rgba(0, 0, 0, 0.35)",
        warm: "0 12px 36px rgba(182, 70, 30, 0.28)",
        glow: "0 0 0 1px rgba(231, 184, 92, 0.24), 0 12px 34px rgba(217, 139, 43, 0.22)"
      },
      backgroundImage: {
        "hero-fire":
          "radial-gradient(circle at 20% 20%, rgba(217, 139, 43, 0.25), transparent 35%), radial-gradient(circle at 78% 12%, rgba(182, 70, 30, 0.26), transparent 38%), linear-gradient(145deg, #1c120d 0%, #241610 55%, #2a1a14 100%)",
        "card-fire": "linear-gradient(140deg, rgba(42, 26, 20, 0.94), rgba(28, 18, 13, 0.92))"
      }
    }
  },
  plugins: []
};

export default config;
