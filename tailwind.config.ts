import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
          container: "rgb(var(--color-primary) / <alpha-value>)",
          on: "rgb(var(--color-on-primary) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
          container: "rgb(var(--color-secondary-container) / <alpha-value>)",
          on: "rgb(var(--color-on-secondary) / <alpha-value>)",
        },
        tertiary: {
          DEFAULT: "rgb(var(--color-tertiary) / <alpha-value>)",
          container: "rgb(var(--color-tertiary-container) / <alpha-value>)",
        },
        surface: {
          base: "rgb(var(--color-surface-base) / <alpha-value>)",
          canvas: "rgb(var(--color-surface-canvas) / <alpha-value>)",
          dim: "rgb(var(--color-surface-dim) / <alpha-value>)",
          variant: "rgb(var(--color-surface-variant) / <alpha-value>)",
        },
        petrol: "rgb(var(--color-petrol) / <alpha-value>)",
        deepViolet: "rgb(var(--color-deep-violet) / <alpha-value>)",
        border: {
          subtle: "rgb(var(--color-border-subtle) / <alpha-value>)",
        }
      },
      backgroundImage: {
        'signature-gradient': 'linear-gradient(135deg, rgb(var(--color-gradient-start)) 0%, rgb(var(--color-gradient-end)) 100%)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        'xl': '10px',
        '2xl': '16px',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '0.75rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      boxShadow: {
        'level-1': '0 2px 8px -2px rgba(2, 65, 84, 0.05), 0 1px 4px -1px rgba(2, 65, 84, 0.03)',
        'level-2': '0 8px 24px -4px rgba(2, 65, 84, 0.08), 0 2px 6px -1px rgba(2, 65, 84, 0.04)',
        'level-3': '0 20px 40px -8px rgba(2, 65, 84, 0.16)',
        'ai-glow': '0 8px 32px -4px rgba(130, 68, 126, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;
