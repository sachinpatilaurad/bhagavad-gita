/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // We will define custom colors based on the screenshot
        'gita-orange': '#D2693F',
        'gita-dark': '#1a1a1a',
        'divine': '#D4AF37', // Gold
        'temple': '#2c1e16', // Deep Brown
        'saffron': '#FF9933', // Saffron
        'deep-bg': '#1b120d', // Dark Background
      },
      fontFamily: {
        // Define your custom font names here
        'divine': ['Marcellus', 'Cinzel', 'serif'],
        'body': ['Alegreya', 'Cormorant Garamond', 'serif'],
        'hindi': ['Noto Serif Devanagari', 'Tiro Devanagari Sanskrit', 'serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}