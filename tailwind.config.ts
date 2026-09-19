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
          DEFAULT: "#015F67",
          dark: "#00464C",
          container: "#015F67",
          on: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#82447E",
          container: "#FFB3F5",
          on: "#FFFFFF",
        },
        tertiary: {
          DEFAULT: "#074457",
          container: "#285B6F",
        },
        surface: {
          base: "#FFFFFF",
          canvas: "#F5F7F7",
          dim: "#CFDCE2",
          variant: "#D7E5EA",
        },
        petrol: "#024154",
        deepViolet: "#5E3473",
        border: {
          subtle: "#D9E1E2",
        }
      },
      backgroundImage: {
        'signature-gradient': 'linear-gradient(135deg, #015F67 0%, #82447E 100%)',
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
