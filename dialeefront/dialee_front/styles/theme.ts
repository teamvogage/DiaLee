import { DefaultTheme } from "styled-components";
export class CcolorTheme{
    main:String="";//어두운 부분 
    color1:String=""; //다음 
    color2:String="";//다음
    color3:String="";//가장밝음
}
export class CfontSize{
    small:String="15px";
    medium:String="25px";
    large:String="40px";
}
const basicColorTheme:CcolorTheme={
    main:"#4B6587",
    color1:"#C8C6C6",
    color2:"#F0E5CF",
    color3:"#F7F6F2"
}

const springColorTheme:CcolorTheme={
    main:"#FA26A0",
    color1:"#05DFD7",
    color2:"#A3F7BF",
    color3:"#FFF591",
    }
const summerColorTheme:CcolorTheme={
    main:"#233E8B",
    color1:"#1EAE98",
    color2:"#A9F1DF",
    color3:"#FFFFC7"
}
const fallColorTheme:CcolorTheme={
    main:"#6E3B3B",
    color1:"#AC3F21",
    color2:"#BE6A15",
    color3:"#F3CF7A",
}
const winterColorTheme:CcolorTheme={
    main:"#363062",
    color1:"#4D4C7D",
    color2:"#827397",
    color3:"#D8B9C3"
}
const basicTheme: DefaultTheme={
    colors:basicColorTheme,
    fontSize:new CfontSize(),
}
const springTheme: DefaultTheme = {
 colors:springColorTheme,
 fontSize:new CfontSize(),
};

const summerTheme: DefaultTheme = {
  colors:summerColorTheme,
  fontSize:new CfontSize(),
};
const fallTheme:DefaultTheme={
    colors:fallColorTheme,
    fontSize:new CfontSize(),
}
const winterTheme:DefaultTheme={
    colors:winterColorTheme,
    fontSize:new CfontSize(),
}

export { springTheme, summerTheme,fallTheme,winterTheme,basicTheme };
 