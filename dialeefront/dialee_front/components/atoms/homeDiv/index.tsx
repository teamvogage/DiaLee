import { ComponentProps ,memo} from "react";
import styled from "styled-components";
const StyledHomeDiv=styled.div`
    z-index: 3000;
    width:100%;
    margin-left:0px;
    position: absolute;
    overflow: hidden;
    left:0;
    height: 100vh;
    display:flex;
    color:white;
    flex-direction:column;
    font-size:30px;
    justify-content:center;
    align-contents:flex-end;
    align-items:center;
    background: linear-gradient(black,#590995 );
   
`
const HomeDiv =({children,onClick,onFocus,onTouchSTart}:ComponentProps<any>)=>{
    return(
        <StyledHomeDiv onClick={onClick} onFocus={onFocus} onTouchStart={onTouchSTart}>
            {children}
        </StyledHomeDiv>
    )
}
export default memo(HomeDiv);