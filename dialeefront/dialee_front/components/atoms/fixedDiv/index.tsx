import { ComponentProps } from 'react';
import styled from 'styled-components';
import FlexContainer from '../flexcontainer';
const StyledDiv=styled.div<{width:string,height:string,top:string,left:string,zIndex:number,background:string}>`
    width:${(props)=>props.width};
    height:${(props)=>props.height};
    top:${(props)=>props.top};
    left:${(props)=>props.left};
    position:absolute;
    z-index:${(props)=>props.zIndex};
    border:2px solid black;
    background:${props=>props.background||`white`}
    
`

const FixedDiv=({width,height,top,left,zIndex,children,background}:ComponentProps<any>)=>{
    return (
    <StyledDiv background={background} width={width} height={height} zIndex={zIndex} top={top} left={left}>
        <FlexContainer direction="row" align="center">{children}</FlexContainer>   
    </StyledDiv>)
}

export default FixedDiv