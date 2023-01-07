/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'button-yellow': '#edcd1f',
        'blue-text' : '#0079ae',
        whitesmoke: "#f5f5f5",
        "grey-flex": "#333",
        "purple-icons": "#350b2d"
    },

      width:{
        'imageContainer' : '31.25rem'
      },
      height: {
        '40vh' : '40vh',
        '50vh' :'50vh',
        '60vh' : '60vh',
        '70vh' : '70vh',
        '80vh' : '80vh', 
      },
      fontFamily:{
        Montserrat : "Montserrat",
        Roboto : "Roboto",
        Lato : "Lato",
        Poppins : "Poppins"
      },
      fontSize:{
        '7.5xl' : '5rem'
      }
    },
  },
  plugins: [],
}
