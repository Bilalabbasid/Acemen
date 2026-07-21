/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#dce3f0',
          200: '#b8c7e2',
          300: '#8da3d3',
          400: '#6685c5',
          500: '#4066b6',
          600: '#1c2d4f',
          700: '#152240',
          800: '#0a1628',
          900: '#050a18',
          950: '#030610',
        },
        gold: {
          50: '#fdf9ef',
          100: '#faf0d6',
          200: '#f0dca8',
          300: '#e8d5a0',
          400: '#dfc278',
          500: '#c9a84c',
          600: '#b8922e',
          700: '#8a6e22',
          800: '#5c4917',
          900: '#2e240b',
        },
        // Muted luxury accents — desaturated metallics & earth tones (no bright primaries)
        venture: {
          ecommerce: '#b08d57', // antique brass
          it: '#7d8ca3',        // brushed pewter
          shoes: '#9c6b45',     // cognac leather
          travel: '#6f8778',    // muted verdigris
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'Playfair Display', 'serif'],
        heading: ['var(--font-heading)', 'Outfit', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'premium-lg': '0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
        'premium-xl': '0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.06)',
        'glow-gold': '0 0 20px rgba(201, 168, 76, 0.15), 0 0 60px rgba(201, 168, 76, 0.05)',
        'glow-gold-lg': '0 0 30px rgba(201, 168, 76, 0.2), 0 0 80px rgba(201, 168, 76, 0.08)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(2deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(0px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        skeleton: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
