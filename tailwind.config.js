module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens:{
        'xs': {'max': '768px'},

      },


      boxShadow:{
        header3D: "0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f,  3px 4px  0px #393d3f",
        box: "0px 0px 1px rgba(0,0,0, 0.3), 0px 3px 7px rgba(0,0,0, 0.3), 0px 1px white inset, 0px -3px 1px rgba(0,0,0, 0.3) inset"

      },


      backgroundPosition:{
        'banner-position': "-10px -30px"

      },
      backgroundImage:{
        'bg-imagen': "url('../img/fondo1.jpg')",
        'yuuji': "url('../img/3.jpg')",
        'yuuji2': "url('../img/2.jpg')",
        'yuuji8': "url('../img/8.jpg')",
        'yuuji9': "url('../img/9.jpg')",
        'yuuji10': "url('../img/10.jpg')",
        'yuuji1': "url('../img/1.jpg')",
        'gojo': "url('../img/4.jpg')",
        'sukuna': "url('../img/5.jpg')",
        'megumi': "url('../img/6.jpg')",
        'nobara': "url('../img/7.jpg')",

      },
      colors: {
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#0370b9"
      }
    },
      animation:{
        'pulse-low': 'pulse 5s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 300ms linear',
        'show-card-icon': 'showCardIcon 300ms linear',
        'show-card-category': 'showCardCategory 400ms linear',
        'show-card-description': 'showCardDescription 400ms linear',

     },

     keyframes:{

   

      fromBellow:{
        '0%': { transform: "translateY(0%)"},
        '50%': { transform: "translateY(200%)"},
        '100%': { transform: "translateY(0%)"},


      },

      fromRight:{
        '0%': { transform: "translateY(200%)"},
        '100%': { transform: "translateY(0%)"},


      },

      

      showCardIcon: {
        'from': {
          transform: "translateY(-200%)"
        },
        'to': {
          transform: "translateY(0%)"

        }
      },
      showCardCategory:{
        'from': {
          transform: "translateY(-300%)"
        },
        'to': {
          transform: "translateY(0%)"

        }

      },
      showCardDescription:{
        'from': {
          transform: "translateX(-300%)"
        },
        'to': {
          transform: "translateX(0%)"

        }

      },

      
}

  },
  variants:{
    animation: ['responsive', 'hover', 'group-hover'],
    animate: ['responsive', 'hover', 'group-hover'],
    fontSize: ['responsive', 'hover', 'group-hover'],
    transform: ['responsive', 'hover', 'group-hover'],
    scale: ['responsive', 'hover', 'group-hover'],
    padding: ['responsive', 'hover', 'group-hover'],
  },
     
  
}


      
