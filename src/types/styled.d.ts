import 'styled-components'


declare module 'styled-components'{
    export interface DefaultTheme {
        border:{
            radius: string
        },
     
        colors:{
         main: string
         secondary: string
     
         fontColor: string
     
         hover: string,
         active: string,
        }
    }
}