/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'primary':'0px 0px 20px 0px rgba(0,0,0,0.05)'
      },
      colors:{
        'primary' : '#2196F3'
      }
    },
    fontFamily:{
      'IranSans' : 'IranSans',
      'IranSansBold' : 'IranSansBold'
    }
  },
  plugins: [],
};
