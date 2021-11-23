
import { ComponentProps,useState } from 'react';
import styled from 'styled-components';
const StyledSpan=styled.span<{size:number,color:string,background:string}>`
    font-size:${props=>props.size||16}px;
    color:${props=>props.color||"black"};
    background-color:${props=>props.background||"rgba(0,0,0,0)"};
    border-bottom:1px solid black;
    font-weight:bold;
    transition:width 3s;
    
`
const Span=(props:ComponentProps<any>)=>{
    
   
    return (<StyledSpan size={props.size}  background={props.background} color={props.color}>{props.children}</StyledSpan>
    )
}

export default Span;