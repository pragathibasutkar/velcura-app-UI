import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        muted: "var(--color-ink-muted)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        mint: "var(--color-mint)",
        "surface-low": "var(--color-surface-low)",
        "surface-container-low": "var(--color-surface-low)",
        sand: "var(--color-sand)",
        sage: "var(--color-sage)",
        saffron: "var(--color-saffron)",
        terracotta: "var(--color-terracotta)",
        success: "var(--color-success)",
        info: "var(--color-info)",
        plum: "var(--color-plum)",
      },
      fontFamily: { sans: ["var(--font-inter)"], display: ["var(--font-newsreader)"] },
      borderRadius: { control: "var(--radius-control)", card: "var(--radius-card)", hero: "var(--radius-hero)" },
      boxShadow: { botanical: "var(--shadow-botanical)", modal: "var(--shadow-modal)" },
    },
  },
  plugins: [],
};

export default config;
