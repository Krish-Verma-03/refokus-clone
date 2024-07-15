/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor1: '#5355EE',
        customColor2: '#49566A',
        customColor3: '#34545F',
        customColor4: '#3E4264',
        customColor5: '#2DCB76',
        customColor6: '#4C20CF',
        customColor7: '#c730ec',
        customColor8: '#3E3E46',
        
      },
    },
  },
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
    ],
    safelist: [
      'bg-customColor1', 'hover:bg-customColor1',
      'bg-customColor2', 'hover:bg-customColor2',
      'bg-customColor3', 'hover:bg-customColor3',
      'bg-customColor4', 'hover:bg-customColor4',
      'bg-customColor5', 'hover:bg-customColor5',
      'bg-customColor6', 'hover:bg-customColor6',
      'bg-customColor7', 'hover:bg-customColor7',
      'bg-customColor8', 'hover:bg-customColor8',
      'bg-purple-500', 'hover:bg-purple-500',
    ],
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
}

