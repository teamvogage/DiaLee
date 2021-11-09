import 'styled-components';
import {CFontfamilies,CcolorTheme,CtextColor,IfontSize} from './styles/theme'
declare module 'styled-components' {
  export interface DefaultTheme {
  
    colors:CcolorTheme,
    fontSize:IfontSize,

    textColor:CtextColor,
  }
}
