import { DefaultTheme } from "styled-components"


export const mainTheme : DefaultTheme = {
   border:{
       radius: "0.4em"
   },

   colors:{
    main: "#FF5252",
    secondary: "#FF9E9E",

    fontColor: "#FFFFFF",

    hover: "#B33A3A",
    active: "#7F2929",

   }
}

export const darkTheme : DefaultTheme = {
    border:{
        radius: "0.4em"
    },
 
    colors:{
     main: "#444444",
     secondary: "#bebebe",

     fontColor: "#FFFFFF",
 
     hover: "#878683",
     active: "#0000",
 
    }
}