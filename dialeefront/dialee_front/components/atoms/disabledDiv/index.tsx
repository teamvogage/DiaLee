import { ComponentProps,memo, useEffect, useState } from 'react';
import styled from 'styled-components'

const StyledDiv=styled.div<{marginLeft:string,height:string,zIndex:number}>`
    position:absolute;
    width:100%;
    min-height:${({height})=>height||`100%`};
    z-index:${({zIndex})=>zIndex||`1000`};
    max-width:700px;
    display:flex;
    height:100%;
    top:0;
    left:0;
    overflow-x:hidden;
    overflow-y:hidden;
    justify-content:flex-start;
    flex-direction:row;
    word-break:keep-all;
    
    margin-left:${({marginLeft})=>marginLeft?marginLeft:'0px'};
    background:${(props)=>{
        return `linear-gradient(180deg, ${props.theme.colors.color1} 7%, ${props.theme.colors.color3} 87%, ${props.theme.colors.main} 100%)`}};
    
    animation:loading 0.5s forwards
        @keyframes loading{
            from{
                transform:translateY(-700px);
            }
            to{
                transfrom:translateY(0px);
            }
        }

       
    
`

const DisabledDiv=({height,marginLeft,onMouseMove,children,zIndex,onClick}:ComponentProps<any>)=>{
   
    return(
        <StyledDiv height={height} marginLeft={marginLeft} zIndex={zIndex} onClick={onClick}  onMouseMove={onMouseMove}>
            {children}
        </StyledDiv>
    )
}
export default DisabledDiv