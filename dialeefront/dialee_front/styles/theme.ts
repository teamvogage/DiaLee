import { DefaultTheme } from "styled-components";
export class CcolorTheme{
    main:string="";//어두운 부분 
    color1:string=""; //다음 
    color2:string="";//다음
    color3:string="";
    color4:string="#F2D0D7";
   
   
    //가장밝음
}

export interface IfontSize{
    small:string;
    medium:string;
    large:string;
    button:string;
}
export class CtextColor{
    primary:string="black";
    secondary:string="black";
    title:string="black";
}
export class CFontfamilies{
    menu:string="NanumSon";
    title:string="NanumSon";
    plain:string="NanumSon";
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
    main:"#D1DAE1",
    color1:"#76848F",
    color2:"#d8ebff",
    color3:"#4d5057",
    color4:"#8e6569",
    
  
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
    button:"30px",
}
const retroTheme:DefaultTheme={
    ...basicTheme,
    colors:retroColorTheme,
    fontSize:retroFontSize,
 
}

export { springTheme, summerTheme,fallTheme,winterTheme,basicTheme ,retroTheme};
 