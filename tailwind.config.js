/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18',
          900: '#0A1128',
          850: '#0F1A3A',
          800: '#14224D',
          700: '#1D2E68',
          600: '#283E89',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA5A',
          dark: '#128C7E',
          surface: '#EBF9F1',
        },
        brand: {
          blue: '#2563EB',
          cyan: '#06B6D4',
          accent: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        math: ['KaTeX_Main', 'Cambria Math', 'serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
        'glow-whatsapp': '0 0 25px -5px rgba(37, 211, 102, 0.4)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
