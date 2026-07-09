/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f3f9",
          100: "#dce3f0",
          200: "#b8c7e2",
          300: "#8da3d3",
          400: "#6685c5",
          500: "#4066b6",
          600: "#1c2d4f",
          700: "#152240",
          800: "#0a1628",
          900: "#050a18",
          950: "#030610",
        },
        gold: {
          50: "#fdf9ef",
          100: "#faf0d6",
          200: "#f0dca8",
          300: "#e8d5a0",
          400: "#dfc278",
          500: "#c9a84c",
          600: "#b8922e",
          700: "#8a6e22",
          800: "#5c4917",
          900: "#2e240b",
        },
        background: {
          primary: "#030610",
          elevated: "#071121",
        },
        surface: {
          glass: "rgba(255, 255, 255, 0.06)",
          muted: "#f7f3ea",
        },
        accent: {
          gold: "#c9a84c",
          "gold-soft": "#e8d5a0",
        },
        text: {
          primary: "#f8fafc",
          muted: "#a7b0c0",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.1)",
        },
        venture: {
          ecommerce: "#b08d57",
          it: "#7d8ca3",
          shoes: "#9c6b45",
          travel: "#6f8778",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        heading: ["var(--font-heading)", "Outfit", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 35px rgba(0, 0, 0, 0.18)",
        "premium-lg": "0 18px 55px rgba(0, 0, 0, 0.22)",
        "glow-gold": "0 0 24px rgba(201, 168, 76, 0.16)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.45s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
