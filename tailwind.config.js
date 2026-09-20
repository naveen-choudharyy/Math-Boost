/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
        },
        brand: {
          navy: '#0F172A',
          slate: '#334155',
          blue: '#2563EB',
          sky: '#0EA5E9',
          accent: '#F59E0B',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA5A',
          dark: '#128C7E',
          surface: '#EBF9F1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 12px 36px 0 rgba(31, 38, 135, 0.12)',
        'glow-blue': '0 10px 25px -5px rgba(37, 99, 235, 0.3)',
        'glow-whatsapp': '0 10px 25px -5px rgba(37, 211, 102, 0.35)',
      },
      animation: {
        'float-slow': 'float 12s ease-in-out infinite alternate',
        'float-reverse': 'floatReverse 14s ease-in-out infinite alternate',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(40px, 30px) scale(1.08)' },
        },
        floatReverse: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(-35px, -25px) scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
}
