
import React, {  ComponentProps } from 'react';
import FlexContainer from '../flexcontainer'
import styled from 'styled-components';
import Image from '../image';
import { urlObjectKeys } from 'next/dist/shared/lib/utils';
interface IbuttonProps{
  btn_type: string;
  width:string;
  height:string;
}
const Prefix=styled.div`
`
const Suffix=styled.div`
`
const StyledButton=styled.button<IbuttonProps>`
    font-family:${props=>props.theme.fontFamily};
    font-size:${({btn_type,theme})=>{
      switch(btn_type){
        default:
          return theme.fontSize.button;
        case "primary": 
          return  "70px"
        case "secondary":
          return  "40px"
      }
     }
    };
    position:relative;
    line-height:${({height,btn_type}:IbuttonProps)=>{
      if(height)
        return height;
      switch(btn_type){
        default:
          return "20px"
        case "menu":
          return  "20px"
        case "primary": 
          return  "280px"
        case "secondary":
          return  "180px"
      }
     }
    };
    background-color:${(props)=>{
      if(props.btn_type.startsWith("sub")){
        const idx=props.btn_type.split("subMenu")[1];
        const colors=Object.keys(props.theme.colors);
        return props.theme.colors[colors[Number(idx)%5]]
      }
      if(props.btn_type==="cancle"){
        return 'black';
      }
      if(props.btn_type==="slideMenu") 
      return `none`;
      return props.theme.colors.color3
    
    }};
     box-shadow: -2px 8px 1px 0 rgba(0,0,0,0.2), 0 6px 3px 0 rgba(0,0,0,0.19);
     :hover{
        color:white;
        background-color:${(props)=>{
          if(props.btn_type.startsWith("sub")){
            const idx=props.btn_type.split("subMenu")[1];
            const colors=Object.keys(props.theme.colors);
            return props.theme.colors[colors[(Number(idx)+2)%5]]
          }
          if(props.btn_type==="cancle"){
            return 'red';
          }
          if(props.btn_type==="slideMenu") 
          return `none`;
          return props.theme.colors.color3
        
        }};
          border-radius:${({btn_type}:IbuttonProps)=>{if(btn_type.startsWith("sub"))return 0;}};
     };
     :hover span{
        animation-duration: 1s;
        animation-name: moveX;
        animation-fill-mode:forwards;
     }
     @keyframes moveX {
       100%{
    
          transform: translateX(-25px)  rotate(360deg);
          transition-property: transform;
          transition-duration: 2s;
          transition-timing-function: ease-out;
       }
     } 
     :active{
      background-color:${(props)=>{
        if(props.btn_type==="slideMenu") 
            return `black`; 
       return 'white';
     }};
     width:${(props)=>{
      if(props.btn_type.startsWith("sub")) 
          return `170px`; 
     }};
     transition:width 0.3s;
     color:white;
      border-radius:${({btn_type}:IbuttonProps)=>{if(btn_type==="menu")return 0;}};
    };
     height:${({height,btn_type}:IbuttonProps)=>{
      if(height)
        return height;
      switch(btn_type){
        default:
          return "40px"
        case "menu":
          return  "30px"
        case "primary": 
          return  "300px"
        case "secondary":
          return  "200px"
        case "book":
          return "297px";
          case "slideMenu":
            return "35px";
      }
     }
    };

    width:${({width,btn_type}:IbuttonProps)=>{
      if(width)
        return width;
      switch(btn_type){
        default:
          return "150px"
        case "primary": 
          return  "300px"
        case "secondary":
          return  "200px"
        case "book":
          return "210px";
          case "slideMenu":
            return "35px";
      }
     }
    };
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: ${({btn_type,theme})=>{
      if(btn_type==="cancle")
      return `white`;
      if(btn_type.startsWith("sub")){
        return 'white';
      }
      return 'black'
    
    }};
    background-image:${({btn_type})=>{
      if(btn_type==="slideMenu")return `url("/HamburgerBtn.png")`
      else 
      return 'none';
    }} ;
    background-size: cover;
     border:3px black solid;
     border-radius:${({btn_type}:IbuttonProps)=>{
       switch(btn_type){
        default:
          return "15% 0% 0% 10%"
        case "primary": 
          return  "10%"
        case "secondary":
          return  "100%"
        case "cancle":
          return "0";
        case "book":
          return "0";
        case "slideMenu":
          return "5%";
       }
     
     }} ;
     transition-property:background-color;
     transition-duration:0.2s;
`
export default function Button({suffix,prefix,width,height,btn_type,direction,align,wrap,onClick,children,alignItems}:ComponentProps<any>) {
  return (
    <StyledButton type="button" btn_type={btn_type} width={width} height={height} onClick={onClick}>
      <FlexContainer direction={direction} align={btn_type.startsWith("sub")?"between":align?align:"center"} wrap={wrap} alignItems={alignItems?alignItems:"center"}>
         <span>
          {prefix?<Prefix ><Image rotate="no" width="30px" height="30px" src={prefix} ></Image></Prefix>:null}
          </span>
        <div>
          {children??children}
        </div>
          {suffix?<Suffix><Image rotate="no" width="20px" height="20px" src={suffix} /></Suffix>:null}
        </FlexContainer>
    </StyledButton>
  );
}