/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter : ['Inter', 'sans-serif'],
        urbanist : ['Urbanist', 'sans-serif'],
        workSans : ['Work Sans', 'sans-serif'],
      }
    },
    colors:{
      'background' : '#181A20',
      'textLight' : '#FFFFFF',
      'textSecondary-200' : 'rgba(255, 255, 255, 0.65)',
      'textSecondary-100' : 'rgba(255, 255, 255, 0.6)',
      'accent' : 'rgba(255, 130, 0, 1)',
      'secondary' : '#FFF2E5',
      'formInput' : '#2C2C3D',
      'searchInput' : '#515151'

    }
  },
  plugins: [],
}

