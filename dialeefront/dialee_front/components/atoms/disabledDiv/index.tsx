import { ComponentProps } from 'react';
import styled from 'styled-components'
import Image from '../image'
const StyledDiv=styled.div<{marginLeft:string}>`
    position:absolute;
    width:100%;
    height:100%;
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

const disabledDiv=({marginLeft,onMouseMove}:ComponentProps<any>)=>{
    return(
        <StyledDiv marginLeft={marginLeft} onMouseMove={onMouseMove}>

        </StyledDiv>
    )
}
export default disabledDiv;