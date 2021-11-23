import { HtmlProps } from 'next/dist/shared/lib/utils';
import { ComponentProps ,useState,forwardRef,memo, ForwardedRef} from 'react';
import styled from 'styled-components';
import Image from '../../atoms/image'
export interface IinputProps {
    height: string;
    width: string;
    placeholder: string;
}
const StyledInputDiv =styled.div`
    position:relative;
  
   
`
const StyledImage=styled.div`
    position:absolute;
    top:14px;
    right:0;
    cursor:pointer;
`
const StyledInput = styled.input<IinputProps>`
width:${props => {
    if (props.width)
        return props.width;
    return "80%"
}};
    height:${props => {
        if (props.height)
            return props.height
        return "40px"
    }};
    font-family:"Nanumson";
    margin:10px;
    font-size:20px;
    
    height:${props => {
        if (props.height)
            return props.height
        return "40px"
    }};
    line-height:${props => {
        if (props.height)
            return props.height
        return "40px"
    }};
    border:none;
    
    background-color:rgba(0,0,0,0);
    border-bottom:2px double black;
  
    
 
    
    placeholder:${props => props.placeholder || ';'};
    ::placeholder:{color:red};
`

const Input = forwardRef((props:ComponentProps<any>,ref:ForwardedRef<HTMLInputElement>) => {
    const [type,setType]=useState("password");
   
    const onClick=()=>{ 
        type!=="text"?setType("text"):setType("password");
    }
    const passwordInput= ()=><StyledInput ref={ref} id={props.id} width={props.width} height={props.height} placeholder={props.placeholder} type={type} value={props.value} name={props.name} autoComplete={"off"}  onBlur={props.onBlur} onChange={props.onChange}></StyledInput>
                                   
    const normalInput=()=>  <StyledInput ref={ref} id={props.id} type={props.type} value={props.value} name={props.name} autoComplete={"off"} maxLength={props.maxlength} onBlur={props.onBlur} onChange={props.onChange} {...props}></StyledInput>
      
    return (
    <StyledInputDiv >
        {props.type==="password"?passwordInput():normalInput()}
        {props.type==="password"?<StyledImage onClick={onClick}>{type==="password"?<Image height="30px" width="30px" src="/imoticon/Gift.png"></Image>:<Image height="30px" width="30px" src="/imoticon/Tube.png"></Image>}</StyledImage>:null}
    </StyledInputDiv>
    )
});
export default Input;
