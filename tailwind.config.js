module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens:{
        'xs': {'max': '768px'},

      },
      backgroundPosition:{
        'banner-position': "-10px -30px"

      },
      backgroundImage:{
        'bg-imagen': "url('../img/fondo1.jpg')",

      },
      colors: {
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#0370b9"
      }
    },
       animation:{
         'pulse-low': 'pulse 5s linear infinite',

    }

  },
  
}
      
