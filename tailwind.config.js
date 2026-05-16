/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0A0A0A',
        deepnight: '#050505',
        charcoal: '#121212',
        electric: '#00E5FF',
        navy: '#0A192F',
        gold: '#D4AF37',
        softcyan: '#6FE3FF',
        emerald: '#00FF66',
        orangeGlow: '#FF5500',
        neonpurple: '#B026FF',
        darkgray: '#1A1F2E',
        midgray: '#2A3142',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'stadium-light': 'stadium-light 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 10px rgba(0,229,255,0.8))' },
          '50%': { opacity: .7, filter: 'drop-shadow(0 0 20px rgba(0,229,255,1))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'stadium-light': {
          '0%, 100%': { opacity: 0.8, filter: 'brightness(1)' },
          '50%': { opacity: 1, filter: 'brightness(1.5)' },
        }
      }
    },
  },
  plugins: [],
}
