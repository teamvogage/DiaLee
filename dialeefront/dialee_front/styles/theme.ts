import { DefaultTheme } from "styled-components";
export class CcolorTheme{
    main:String="";//어두운 부분 
    color1:String=""; //다음 
    color2:String="";//다음
    color3:String="";
    color4:String="#F2D0D7";
   
   
    //가장밝음
}

export interface IfontSize{
    small:String;
    medium:String;
    large:String;
    button:String;
}
export class CtextColor{
    primary:String="black";
    secondary:String="black";
    title:String="black";
}
const standardTextColor=new CtextColor();
const basicColorTheme:CcolorTheme={
    
    main:"#F15A5A",
    color1:"#F0C419",
    color2:"#4EBA6F",
    color3:"#2D95BF",
    color4:"#955BA5",

}

const springColorTheme:CcolorTheme={
    main:"#F24484",
    color1:"#F24484",
    color2:"#F29BB2",
    color3:"#F2D0D7",
    color4:"yellowgreen",
    }
const summerColorTheme:CcolorTheme={
    main:"#7463FD",
    color1:"#6EA8FA",
    color2:"#59B7E3",
    color3:"#63F4FD",
    color4:"skyblue",
    
   
}
const fallColorTheme:CcolorTheme={
    main:"#D95204",
    color1:"#F28705",
    color2:"#F2B705",
    color3:"#F2E205",
    color4:"orange",
    
  
}
const winterColorTheme:CcolorTheme={
    main:"#0B7F21",
    color1:"#BF0426",
    color2:"#F20544",
    color3:"#83A603",
    color4:"pink",
    
  
}
const retroColorTheme:CcolorTheme={
    main:"#150485",
    color1:"#590995",
    color2:"#C62A88",
    color3:"#03C4A1",
    color4:"yellow",
    
}
const basicFontSize:IfontSize={
    button:"30px",
    small:"15px",
    medium:"40px",
    large:"70px",
}
const basicTheme: DefaultTheme={
    colors:basicColorTheme,
    fontSize:basicFontSize,
    fontFamily:`"Cute Font", cursive;`,
    textColor:standardTextColor,
}
const springTheme: DefaultTheme = {
    ...basicTheme,
 colors:springColorTheme,
 

};

const summerTheme: DefaultTheme = {
    ...basicTheme,
  colors:summerColorTheme,
 
};
const fallTheme:DefaultTheme={
    ...basicTheme,
    colors:fallColorTheme,
    
}
const winterTheme:DefaultTheme={
    ...basicTheme,
    colors:winterColorTheme,
    
}
const retroFontSize:IfontSize={
    ...basicFontSize,
    button:"15px",
}
const retroTheme:DefaultTheme={
    ...basicTheme,
    colors:retroColorTheme,
    fontSize:retroFontSize,
    fontFamily:"Cafe24SSurroundAir"
}

export { springTheme, summerTheme,fallTheme,winterTheme,basicTheme ,retroTheme};
 