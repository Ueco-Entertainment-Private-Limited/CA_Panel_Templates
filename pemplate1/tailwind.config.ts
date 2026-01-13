import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "primary": "var(--brand-blue)",
          secondary: "var(--brand-link)",
          footer: "var(--brand-footer)",
        },
        accent: {
          emerald: "var(--accent-emerald)",
          orange: "var(--accent-orange)",
          whatsapp: "#25D366", // Hardcoded as per your theme
        },
        // Mapping text colors to standard Tailwind naming or custom keys
        text: {
          heading: "var(--text-heading)",
          primary: "var(--text-primary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
        },
        bg: {
          main: "var(--bg-white)",
          subtle: "var(--bg-light)",
          card: "var(--bg-card)",
        },
      },
      spacing: {
        'section-py': "var(--section-py)",
        'container-px': "var(--container-px)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        xl: "var(--shadow-xl)",
      },
      borderRadius: {
        md: "var(--radius-md)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
    },
  },
  plugins: [],
};

export default config;
