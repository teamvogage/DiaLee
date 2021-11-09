import { ComponentProps,memo } from 'react';
import styled from 'styled-components';
import FlexContainer from '../flexcontainer';
const StyledDiv=styled.div<{width:string,height:string,top:string,left:string,zIndex:number,animated:string,background:string,border:string}>`
    width:${(props)=>props.width};
    height:${(props)=>props.height};
    top:${(props)=>props.top};
    left:${(props)=>props.left};
    position:sticky;
    z-index:${(props)=>props.zIndex};
    border:${props=>props.border||"none"};
    background:${props=>props.background||`white`}
    
`

const FixedDiv=({width,height,top,left,zIndex,children,background,border,animated}:ComponentProps<any>)=>{
    return (
    <StyledDiv animated={animated} border={border} background={background} width={width} height={height} zIndex={zIndex} top={top} left={left}>
        <FlexContainer direction="row" align="center">{children}</FlexContainer>   
    </StyledDiv>)
}

export default memo(FixedDiv,()=>true)