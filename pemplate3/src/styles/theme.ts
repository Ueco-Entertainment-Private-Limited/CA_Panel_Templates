// src/styles/theme.ts

export const theme = {
  colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
    primary: {
      DEFAULT: "var(--primary)",
      foreground: "var(--primary-foreground)",
    },
    secondary: {
      DEFAULT: "var(--secondary)",
      foreground: "var(--secondary-foreground)",
    },
    destructive: "var(--destructive)",
    border: "var(--border)",
    ring: "var(--ring)",
    // Chart tokens
    chart: {
      1: "var(--chart-1)",
      2: "var(--chart-2)",
      3: "var(--chart-3)",
    },
  },
  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
  },
} as const;

export type Theme = typeof theme;
