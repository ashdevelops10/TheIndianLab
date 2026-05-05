import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1480px",
      },
    },
    extend: {
      colors: {
        bg: {
          base: "#0D0907",
          surface: "#15100B",
          elevated: "#1F1812",
          velvet: "#221915",
        },
        accent: {
          gold: "#C9A36A",
          goldlight: "#E5CC92",
          bordeaux: "#6B1F22",
          terracotta: "#A8553C",
          ember: "#C8472B",
          saffron: "#E1A85F",
          copper: "#8C5A3C",
        },
        fg: {
          cream: "#F2E8D5",
          bone: "#D9CFB8",
          muted: "#8E8475",
          dim: "#5A5142",
        },
        line: "rgba(242,232,213,0.10)",
        "line-strong": "rgba(242,232,213,0.20)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        deva: ["var(--font-deva)", "ui-serif", "serif"],
      },
      fontSize: {
        "fluid-display": ["clamp(3.5rem, 13vw, 12rem)", { lineHeight: "0.9", letterSpacing: "-0.035em" }],
        "fluid-hero": ["clamp(2.75rem, 10vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.025em" }],
        "fluid-h1": ["clamp(2.5rem, 7vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "fluid-h2": ["clamp(2rem, 5.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.018em" }],
        "fluid-h3": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "fluid-body": ["clamp(1rem, 1.05vw + 0.85rem, 1.1rem)", { lineHeight: "1.65" }],
        "fluid-lead": ["clamp(1.125rem, 1.4vw + 0.85rem, 1.375rem)", { lineHeight: "1.5", letterSpacing: "-0.005em" }],
        "label": ["0.7rem", { lineHeight: "1", letterSpacing: "0.24em" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-slow": { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        shimmer: { "0%, 100%": { opacity: "0.4" }, "50%": { opacity: "1" } },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-cue": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee-slow 90s linear infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scroll-cue": "scroll-cue 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.85 0 0 0 0 0.65 0 0 0 0.1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "radial-gold":
          "radial-gradient(ellipse at center, rgba(201,163,106,0.18) 0%, rgba(13,9,7,0) 60%)",
        vignette:
          "radial-gradient(ellipse at center, transparent 40%, rgba(13,9,7,0.65) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
