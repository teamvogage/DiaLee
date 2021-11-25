import { ComponentProps,memo } from 'react';
import styled from 'styled-components'
import Image from '../image'
const StyledDiv=styled.div<{marginLeft:string,height:string}>`
    position:absolute;
    width:100%;
    min-height:${({height})=>height||`100%`};
    z-index:1000;
    
    display:flex;
    top:0;
    left:0;
    overflow-x:hidden;
    justify-content:flex-start;
    flex-direction:row;
    word-break:keep-all;
    margin-left:${({marginLeft})=>marginLeft?marginLeft:'0px'};
    
    @keyframes anim{
        100%{
            background-color:rgba(0,0,0,0.8);
        }
    }
    animation:anim 0.3s forwards;
    
`

const disabledDiv=({height,marginLeft,onMouseMove,children}:ComponentProps<any>)=>{
    return(
        <StyledDiv height={height} marginLeft={marginLeft} onMouseMove={onMouseMove}>
            {children}
        </StyledDiv>
    )
}
export default disabledDiv