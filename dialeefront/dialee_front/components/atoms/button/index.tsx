
import React, {  ComponentProps } from 'react';
import FlexContainer from '../flexcontainer'
import styled from 'styled-components';
import Image from '../image';
import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import AnimatedDiv from '../animatedDiv';
interface IbuttonProps{
  btn_type: string;
  width:string;
  height:string;
  marginRight:string;
}
const Prefix=styled.div`
`
const Suffix=styled.div`
`
const StyledButton=styled.button<IbuttonProps>`
z-index:3;
    font-family:${props=>props.theme.fontFamily};
    font-size:${({btn_type,theme})=>{
      if(btn_type.startsWith('social'))
      return "20px";
      switch(btn_type){
        default:
          return theme.fontSize.button;
        case "primary": 
          return  "70px"
        case "secondary":
          return  "40px"
        case "ok":
          return "20px";
        case "cancle":
          return "20px";
        case "small":
          return "20px";
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
        case "small":
          return "10px";
      }
     }
    };
    background:${(props)=>{
      if(props.btn_type.startsWith("sub")){
        const idx=props.btn_type.split("subMenu")[1];
        const colors=Object.keys(props.theme.colors);
        return props.theme.colors[colors[Number(idx)%5]]
      }
      if(props.btn_type==="cancle"){
        return 'black';
      }
      if(props.btn_type==="ok"){
        return 'white';
      }
      if(props.btn_type==="no"){
        return 'gray';
      }
      if(props.btn_type==="slideMenu") 
      return `none`;
      if(props.btn_type==="socialKakao"){
        return '#F7E600'
      }
      if(props.btn_type==="socialGoogle"){
        return 'white'
      }
      if(props.btn_type==="small"){
        return "white"
      }
      return props.theme.colors.color3
    
    }};
     box-shadow: ${props=>props.btn_type.startsWith("social")?'':`-2px 8px 1px 0 rgba(0,0,0,0.2), 0 6px 3px 0 rgba(0,0,0,0.19)`};
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
          if(props.btn_type==="ok"){
            return 'skyblue';
          }
          if(props.btn_type==="no"){
            return 'gray';
          }
          if(props.btn_type==="socialKakao"){
            return '#F7E600'
          }
          if(props.btn_type==="socialGoogle"){
            return 'white'
          }
          if(props.btn_type==="slideMenu") 
          return `none`;
          if(props.btn_type==="small"){
            return "black"
          }
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
        if(props.btn_type==="cancle")
            return "yellow"; 
        if(props.btn_type==="small")
            return "gray";
        if(props.btn_type==="no")
            return "red";
       return 'black';
     }};
     width:${(props)=>{
      if(props.btn_type.startsWith("sub")) 
          return `170px`; 
     }};
    
     color:white;
      border-radius:${({btn_type}:IbuttonProps)=>{if(btn_type==="menu")return 0;}};
    };
    
     height:${({height,btn_type}:IbuttonProps)=>{
      if(height)
        return height;
      if(btn_type.startsWith("social"))
        return "40px";
      switch(btn_type){
        default:
          return "60px"
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
        case "ok":
        case "no":  
          return "40px";
        case "cancle":
          return "40px";
        case "small":
          return "30px";
         
      }
     }
    };

    width:${({width,btn_type}:IbuttonProps)=>{
      if(width)
        return width;
      if(btn_type.startsWith("social"))
        return "200px";
      switch(btn_type){
        default:
          return "200px"
        case "primary": 
          return  "300px"
        case "secondary":
          return  "200px"
        case "book":
          return "210px";
          case "slideMenu":
            return "35px";
          case "ok":
          case "no":
            return "100px";
          case "cancle":
            return "100px";
          case "small":
            return  "fit-content";
      }
     }
    };
  
    color: ${({btn_type,theme})=>{
      if(btn_type==="cancle")
      return `white`;
      if(btn_type.startsWith("sub")){
        return 'black';
      }
      if(btn_type==="no"){
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
      if(btn_type.startsWith("social"))
      return "0";
       switch(btn_type){
        default:
          return "15% 0% 0% 10%"
        case "primary": 
          return  "10%"
        case "secondary":
          return  "100%"
        case "cancle" :
        case "ok": 
        case "no":
        case "book":
        case "small":
          return "0";
        case "slideMenu":
          return "5%";
        
         
       }
     
     }} ;
     transition-property:background-color;
     transition-duration:0.2s;
     margin-right:${({marginRight})=>marginRight||`0px`};
`
export default function Button({marginRight,suffix,prefix,width,height,btn_type,direction,align,wrap,onClick,children,alignItems}:ComponentProps<any>) {
  return (<AnimatedDiv animation={!btn_type.startsWith("small")?null:"slideInLeftAnim"} animationFill={!btn_type.startsWith("small")?null:"forwards"} animationTime={!btn_type.startsWith("small")?null:"1s"}>
    <StyledButton type="button" marginRight={marginRight} btn_type={btn_type} width={width} height={height} onClick={onClick}>
      <FlexContainer direction={direction} align={btn_type.startsWith("sub")?"between":align?align:"center"} wrap={wrap} alignItems={alignItems?alignItems:"center"}>
         <span>
          {prefix?<Prefix ><Image rotate="no" width="30px" height="30px" src={prefix} ></Image></Prefix>:null}
          </span>
          <FlexContainer direction="column" align="center">
        <div>
          {children??children}
        </div>
        </FlexContainer>
          {suffix?<Suffix><Image rotate="no" width="20px" height="20px" src={suffix} /></Suffix>:null}
        </FlexContainer>
    </StyledButton>
    </AnimatedDiv>
  );
}