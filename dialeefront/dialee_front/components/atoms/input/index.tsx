import { ComponentProps } from 'react';
import styled from 'styled-components';
export interface IinputProps{
    height:string;
    size:string
    width:string;
    auto:string;
    maxlength:number;
    value:string;
    type:string;
    placeholder:string;
    name:string;
    id:string;
}
const StyledInput =styled.input<IinputProps>`
    width:${props=>{
        if(props.width)
        return props.width;
        return "80%"
    }};
    font-family:${props=>props.theme.fontFamily};
    margin:10px;
    font-size:20px;
    
    height:${props=>{
    if(props.height)
        return props.height
    return "40px"
    }};
    line-height:${props=>{
        if(props.height)
            return props.height
    return "40px"
    }};
    border:none;
    transition:width 3s;
    background-color:rgba(0,0,0,0);
    border-bottom:2px double black;
    ${(props)=>props.auto?`autofocus`:';'};
    maxlength:${props=>props.maxlength||';'};
    value:${props=>props.value||''};
    type:${props=>props.type||'text'};
    placeholder:${props=>props.placeholder||';'};
    ::placeholder:{color:red};
`

const Input=(props:ComponentProps<any>)=>{
    return(
        <StyledInput id={props.id} name={props.name}  onChange={props.onChange} {...props}></StyledInput>
    )
}
export default Input;
