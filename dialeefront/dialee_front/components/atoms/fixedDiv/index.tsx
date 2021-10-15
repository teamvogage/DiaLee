import { ComponentProps } from 'react';
import styled from 'styled-components';
const StyledDiv=styled.div<{width:string,height:string,top:string,left:string}>`
    width:${(props)=>props.width};
    height:${(props)=>props.height};
    top:${(props)=>props.top};
    left:${(props)=>props.left};

`

const FixedDiv=({width,height,top,left}:ComponentProps<any>)=>{
    return (
    <StyledDiv width={width} height={height} top={top} left={left}></StyledDiv>)
}

export default FixedDiv