import type { Config } from "tailwindcss";

/**
 * Cozmo AI design system — matched to hellocozmo.ai.
 * Light cream-led theme with alternating dark bands, a warm orange accent,
 * and a bold grotesque display face. Use semantic tokens, not raw hex.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light surfaces — 4 neutral layers (var-driven, see globals.css)
        cream: "var(--bg)", // primary light page background
        paper: "var(--bg-1)", // paper-like cards / lightest layer
        bg2: "var(--bg-2)", // alternating section layer
        bg3: "var(--bg-3)", // deepest neutral layer
        ink: "var(--ink-surface)", // dark bands + footer
        "ink-raised": "var(--ink-raised)", // dark cards on dark bands

        // Accent — terracotta, reserved for action
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-dim)",
          soft: "var(--accent-tint)",
        },

        // Text on light surfaces
        ink_text: {
          primary: "var(--ink)",
          body: "var(--ink-dim)",
          muted: "var(--ink-mute)",
          faint: "var(--ink-faint)",
        },
        // Text on dark surfaces
        cream_text: {
          primary: "var(--on-dark)",
          body: "var(--on-dark-dim)",
          muted: "var(--on-dark-mute)",
        },

        // Borders
        "line-ink": "var(--line)",
        "line-ink-strong": "var(--line-strong)",
        "line-cream": "var(--line-on-dark)",
        "line-cream-strong": "var(--line-on-dark-strong)",

        error: "var(--danger)",
        success: "var(--success)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Headings — Hedvig Letters Serif. Display: light 300, tight tracking
        // (design.md: 60px / 61.2px / -1.68px).
        display: [
          "clamp(2.75rem, 5vw, 4rem)",
          { lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "300" },
        ],
        h2: [
          "clamp(2rem, 3.6vw, 3rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        h3: ["2rem", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "400" }],
        // h4 stays Inter (UI label), semibold.
        h4: ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        // Body — Inter (16px / 24.8px). Lead text uses body-lg.
        "body-lg": ["1.3125rem", { lineHeight: "1.55" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        sm: ["0.9375rem", { lineHeight: "1.5" }], // body-medium 15px
        caption: ["0.78125rem", { lineHeight: "1.55", letterSpacing: "-0.01em", fontWeight: "700" }],
        // Mono labels/tags/metadata (JetBrains Mono).
        eyebrow: ["0.8125rem", { lineHeight: "1.55", letterSpacing: "0.04em", fontWeight: "500" }],
        "mono-sm": ["0.6875rem", { lineHeight: "1.55", letterSpacing: "0.09em", fontWeight: "500" }],
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "32": "128px",
      },
      maxWidth: { content: "1200px" },
      borderRadius: {
        // design.md radius scale
        sm: "5px",
        md: "6px",
        lg: "10px",
        xl: "12px",
        "2xl": "14px",
        "3xl": "16px",
        bubble: "22px",
        pill: "999px",
      },
      boxShadow: {
        // design.md validated shadow tokens
        soft: "0 6px 24px rgba(0,0,0,0.18)", // soft-drop
        card: "0 1px 2px rgba(20,18,14,0.04), 0 10px 30px rgba(20,18,14,0.07)",
        bubble: "0 12px 32px rgba(0,0,0,0.45)", // bubble-elevation
        phone: "0 40px 80px -20px rgba(0,0,0,0.5)",
        focus: "0 0 0 4px rgba(217,106,44,0.14)", // accent-focus-ring
      },
      transitionTimingFunction: { brand: "cubic-bezier(0.22,1,0.36,1)" },
      transitionDuration: {
        instant: "150ms",
        base: "250ms",
        slow: "400ms",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "typing-dot": {
          "0%, 60%, 100%": { opacity: "0.25", transform: "translateY(0)" },
          "30%": { opacity: "1", transform: "translateY(-2px)" },
        },
      },
      animation: {
        "rise-in": "rise-in 500ms cubic-bezier(0.22,1,0.36,1) both",
        "typing-dot": "typing-dot 1.2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
