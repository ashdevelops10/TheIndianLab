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
        // ── Mood board palette ──────────────────────────────
        // Deep Burgundy #4B1311 · Warm Burgundy #7D2E1F
        // Luxury Gold #CBA66A · Warm Cream #F3EDE4 · Dark Neutral #1E1A14
        bg: {
          base: "#1E1A14",      // dark neutral — default page bg
          surface: "#1E1A14",
          elevated: "#272118",
          velvet: "#15120D",
          burgundy: "#4B1311",  // deep burgundy
          wine: "#7D2E1F",      // warm burgundy
          cream: "#F3EDE4",     // warm cream — light sections
          creamdeep: "#EBE2D5",
        },
        accent: {
          gold: "#CBA66A",
          goldlight: "#DDC290",
          golddeep: "#B08D4F",
          bordeaux: "#4B1311",
          terracotta: "#7D2E1F",
          ember: "#7D2E1F",
          saffron: "#CBA66A",
          copper: "#7D2E1F",
          coral: "#7D2E1F",
          wine: "#4B1311",
        },
        fg: {
          cream: "#F3EDE4",     // light text on dark
          bone: "#E4D9C9",
          muted: "#B7A98F",
          dim: "#8A7C68",
          ink: "#1E1A14",       // dark text on light
          inkmuted: "#5C5142",
        },
        line: "rgba(243,237,228,0.14)",
        "line-strong": "rgba(243,237,228,0.26)",
        "line-ink": "rgba(30,26,20,0.14)",
        "line-ink-strong": "rgba(30,26,20,0.24)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "Times New Roman", "serif"],
        accent: ["var(--font-accent)", "var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        deva: ["var(--font-deva)", "ui-serif", "serif"],
      },
      fontSize: {
        "fluid-display": ["clamp(3.25rem, 10vw, 9.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "fluid-hero": ["clamp(2.75rem, 8vw, 7rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "fluid-h1": ["clamp(2.25rem, 6vw, 5rem)", { lineHeight: "1.06", letterSpacing: "-0.015em" }],
        "fluid-h2": ["clamp(1.875rem, 4.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "fluid-h3": ["clamp(1.4rem, 2.6vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
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
        "marquee-fast": { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
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
        "marquee-slow": "marquee-slow 20s linear infinite",
        "marquee-fast": "marquee-fast 22s linear infinite",
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
