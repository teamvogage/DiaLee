import { ComponentProps } from 'react';
import styled from 'styled-components';
export interface IinputProps{
    size:number;
    auto:string;
    maxlength:number;
    value:string;
    type:string;
    placeholder:string;
}
const StyledInput =styled.input<IinputProps>`
    size:${props=>props.size||'15'};
    ${(props)=>props.auto?`autofocus`:';'};
    maxlength:${props=>props.maxlength||';'};
    value:${props=>props.value||''};
    type:${props=>props.type||'text'};
    placeholder:${props=>props.placeholder||';'};
`

const Index=(props:IinputProps)=>{
    return(
        <StyledInput {...props}></StyledInput>
    )
}
export default Index;
