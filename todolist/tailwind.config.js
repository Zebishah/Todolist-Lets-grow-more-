/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans'],
        'serif': ['Great Vibes', 'serif'],
        custom: ['Poppins', 'sans'],
        custom1: ['Russo one', 'sans'],
      },
      screens: {
        'sssm': '300px',
        'ssmd': '470px',
        'ssm': '550px',
        'smd': '700px',
        'md': '900px',
        'xl': '1000px',
      },
      borderWidth: {
        '1': '1px',
      },

      boxShadow: {
        'sm': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'lg': '0 3px 4px 0 rgba(0, 0, 0, 0.08)'
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}


