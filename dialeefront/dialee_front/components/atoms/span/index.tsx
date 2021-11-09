import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { ComponentProps,memo } from 'react';
import styled from 'styled-components';
const StyledSpan=styled.span<{size:number,color:string,background:string}>`
    font-size:${props=>props.size||16}px;
    color:${props=>props.color||"black"};
    background-color:${props=>props.background||"none"};
    border-bottom:1px solid black;
    font-weight:bold;
    transition:width 3s;
`
const Span=(props:ComponentProps<any>)=>{
    return (<StyledSpan size={props.size} background={props.background} color={props.color}>{props.children}</StyledSpan>
    )
}
const memoDispatcher=(prev:Readonly<any>,next:Readonly<any>)=>{
    if(prev.size!==next.size)
        return false
    if(prev.background!==next.background)
        return false
    if(prev.color!==next.color)
        return false
    if(prev.children!==next.children)
        return false
    return true;
}
export default memo(Span);