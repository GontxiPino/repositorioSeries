/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#69C9C5',
        primaryHover: '#519189',
        secondary: '#4D8E89',
        secondaryHover: '',
        backgroundColor: '#1D1C2A',
        buttonColor: '#7849b4',
      },
      backgroundColor: {
        mainBackground: '#1D1C2A',
        secondaryBackground: '#2B2C3E',
        sideBarBg: '#222433'
      },
      backgroundImage:{
        
        'banner-bg': "url('/assets/img/fondos/B2037067-9082-4206-96F5-32DF3E6C4289.jpg')",
        
      },
      fontFamily: {
        poppinsBlack: 'poppins-black',
        poppinsExtraBold: 'poppins-extrabold',
        poppinsBold: 'poppins-bold',
        poppinsSemiBold: 'poppins-semibold',
        poppinsMedium: 'poppins-medium',
        poppinsRegular: 'poppins-regular',
        poppinsLight: 'poppins-light',
        // poppinsExtraLight: 'poppins-extralight',
        poppinsThin: 'poppins-thin',

      }
    },
  },
  plugins: [],
}