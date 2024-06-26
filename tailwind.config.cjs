/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','./src/**/*.{jsx,js}',],
  theme: {
    extend: {
      fontFamily:{
        manrope:['poppins', 'serif'],
        valera:['Valera Round Regular', 'serif'],
      },
      backgroundImage: {
        'offers' : "url('./assets/Compressed/offers.png')",
        'healthcare' : "url('./assets/Compressed/Healthcare.jpg')",
        'finance' : "url('./assets/Compressed/finance.jpg')",
        'education' : "url('./assets/Compressed/Education.jpg')",
        'digimedia' : "url('./assets/Compressed/digimedia.jpg')",
        'casestudy' : "url('./assets/Compressed/casestudy.png')",
        'laptopcstudy' : "url('./assets/Compressed/Laptop.png')",
        'tata' : "url('./assets/Compressed/tata.png')",
        'indianoil' : "url('./assets/Compressed/indianoil.png')",
        'pandg' : "url('./assets/Compressed/pandg.png')",
        'halli' : "url('./assets/Compressed/halli.png')",
        'testimonial' : "url('./assets/Compressed/testimonial.png')",
        'map' : "url('./assets/Compressed/MAP.png')",
        'cstdmain' : "url('./assets/Compressed/cstdmain.png')",
        'blurr' : "url('./assets/Compressed/blurr.png')",


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
  plugins: [
    
  ],
  
}

