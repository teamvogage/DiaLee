import { ComponentProps,memo } from 'react';
import styled from 'styled-components'
import Image from '../image'
const StyledDiv=styled.div<{marginLeft:string,height:string}>`
    position:absolute;
    width:100%;
    min-height:${({height})=>height||`100%`};
    z-index:1000;
    max-width:700px;
    display:flex;
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
      
  
    
`

const DisabledDiv=({height,marginLeft,onMouseMove,children}:ComponentProps<any>)=>{
    return(
        <StyledDiv height={height} marginLeft={marginLeft} onMouseMove={onMouseMove}>
            {children}
        </StyledDiv>
    )
}
export default DisabledDiv