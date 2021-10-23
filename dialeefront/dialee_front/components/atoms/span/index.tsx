import { ComponentProps } from 'react';
import styled from 'styled-components';
const StyledSpan=styled.span<{size:number,color:string}>`
    font-size:${props=>props.size||16}px;
    color:${props=>props.color||"black"};
`
const Span=(props:ComponentProps<any>)=>{
    return (<StyledSpan size={props.size} color={props.color}>{props.children}</StyledSpan>
    )
}
export default Span;