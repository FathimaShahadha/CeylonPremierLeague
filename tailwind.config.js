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
        navy: '#0A192F',
        darkgray: '#1A1F2E',
        midgray: '#2A3142',
        
        softwhite: '#F8F9FA',
        cream: '#F3F4F6',
        lightgray: '#E5E7EB',
        slate: '#1E293B',
        
        electric: '#008BB5', // Adjusted for contrast
        gold: '#B88A00', // Adjusted for contrast
        softcyan: '#00838F',
        emerald: '#008A38', // Adjusted for contrast
        orangeGlow: '#D84315', // Adjusted for contrast
        neonpurple: '#6A1B9A',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}
