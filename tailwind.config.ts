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
    },
    extend: {
      colors: {
        bg: {
          base: "#0D0907",
          surface: "#0D0907",
          elevated: "#15100B",
          velvet: "#090604",
        },
        accent: {
          gold: "#C8A45D",
          goldlight: "#E7C982",
          bordeaux: "#5F0000",
          terracotta: "#B84D49",
          ember: "#DD645F",
          saffron: "#D7AE68",
          copper: "#9C6756",
          coral: "#DD645F",
        },
        fg: {
          cream: "#FFE7C4",
          bone: "#F0D5B1",
          muted: "#CDAF90",
          dim: "#9C7468",
        },
        line: "rgba(255,231,196,0.14)",
        "line-strong": "rgba(255,231,196,0.28)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        accent: ["var(--font-accent)", "var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        deva: ["var(--font-deva)", "ui-serif", "serif"],
      },
      fontSize: {
        "fluid-display": ["clamp(4rem, 13vw, 13rem)", { lineHeight: "0.9", letterSpacing: "0" }],
        "fluid-hero": ["clamp(3.25rem, 11vw, 9.5rem)", { lineHeight: "0.92", letterSpacing: "0" }],
        "fluid-h1": ["clamp(2.85rem, 9vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "0" }],
        "fluid-h2": ["clamp(2.6rem, 6.8vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "0" }],
        "fluid-h3": ["clamp(1.85rem, 3.6vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "0" }],
        "fluid-marquee": ["clamp(1.1rem, 2.4vw, 1.9rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
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
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 0.86 0 0 0 0 0.66 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "radial-gold":
          "radial-gradient(ellipse at center, rgba(200,164,93,0.16) 0%, rgba(95,0,0,0) 62%)",
        vignette:
          "radial-gradient(ellipse at center, transparent 38%, rgba(40,0,0,0.72) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
