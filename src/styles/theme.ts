export const theme = {
  colors: {
    brand: {
      primary: "var(--brand-blue)",      // #1e3a8a (Navy)
      secondary: "var(--brand-link)",    // #2563eb (Blue)
      footer: "var(--brand-footer)",     // #10487a (Deep Blue)
    },
    accent: {
      emerald: "var(--accent-emerald)",  // #10b981 (Success/NGO)
      orange: "var(--accent-orange)",    // #f97316 (Audit/Tax)
      whatsapp: "#25D366",               // Hardcoded Brand Color
    },
    text: {
      heading: "var(--text-heading)",    // #111827 (Gray-900)
      primary: "var(--text-primary)",    // #374151 (Gray-700)
      muted: "var(--text-muted)",        // #6b7280 (Gray-500)
      light: "var(--text-light)",        // #d1d5db (Gray-300)
    },
    bg: {
      main: "var(--bg-white)",           // #ffffff
      subtle: "var(--bg-light)",         // #f9fafb (Gray-50)
      card: "var(--bg-card)",            // #f8fafc (Slate-50)
    },
  },
  spacing: {
    section: "var(--section-py)",        // py-16 to py-24
    container: "var(--container-px)",    // px-4 to px-12
  },
  shadows: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    xl: "var(--shadow-xl)",
  },
  radius: {
    md: "var(--radius-md)",              // 12px
    xl: "var(--radius-xl)",              // 16px
    "2xl": "var(--radius-2xl)",          // 24px
    full: "9999px",
  },
} as const;

export type DesignTheme = typeof theme;
