
import { ComponentProps,useState } from 'react';
import styled from 'styled-components';
const StyledSpan=styled.span<{size:number,color:string,background:string,textAlign:string}>`
    font-size:${props=>props.size||16}px;
    color:${props=>props.color||"black"};
    background-color:${props=>props.background||"rgba(0,0,0,0)"};
    border-bottom:1px solid black;
    font-weight:bold;
    transition:width 3s;
    text-align:${
        props=>{
            if(props.textAlign)
                return props.textAlign;
            return "center";
        }
    };
    
`
const Span=(props:ComponentProps<any>)=>{
    
   
    return (<StyledSpan textAlign={props.textAlign} size={props.size} onClick={props.onClick}  background={props.background} color={props.color}>{props.children}</StyledSpan>
    )
}

export default Span;