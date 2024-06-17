/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily:{
        manrope:['poppins', 'serif'],
        valera:['Valera Round Regular', 'serif'],
      },
      backgroundImage: {
        'abstract' : "url('./assets/abstract.jpg')",
        'hexagon' : "url('./assets/HEXAGON.png')",
        'offers' : "url('./assets/offers.png')",
        'healthcare' : "url('./assets/Healthcare.jpg')",
        'finance' : "url('./assets/finance.jpg')",
        'education' : "url('./assets/Education.jpg')",
        'digimedia' : "url('./assets/digimedia.jpg')",
        'casestudy' : "url('./assets/casestudy.png')",
        'laptopcstudy' : "url('./assets/Laptop.png')",
        'tata' : "url('./assets/tata.png')",
        'indianoil' : "url('./assets/indianoil.png')",
        'pandg' : "url('./assets/pandg.png')",
        'halli' : "url('./assets/halli.png')",
        'testimonial' : "url('./assets/testimonial.png')",
        'map' : "url('./assets/MAP.png')",
        'cstdmain' : "url('./assets/cstdmain.png')",

      },
      animation: {
        'spin-slow': 'spin 150s linear infinite',
        'spin-medium': 'spin 2s linear infinite',
      },
      size: {
        '128': '32rem',
      },
      colors: {
        'bloo': '#01b0f1',
        'muted': '#7f7f7f',
        'blackk' : '#333333',
      },
    },
  },
  plugins: [],
}

