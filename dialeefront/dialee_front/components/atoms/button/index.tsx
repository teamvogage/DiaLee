
import React, { Children, ComponentProps } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
const StyledButton=styled.button`
    background-color:${(props)=>props.theme.colors.color2};
    width:100px;
    height:100px;
     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
     :hover{
        background-color:${(props)=>props.theme.colors.main};
     }
     border:3px black solid;
     border-radius:20% ;
     transition: 0.5s;
`
export default function Button({width,height,btn_type,src,children}:ComponentProps<any>) {

  return (
    <StyledButton >
        {src?<Image src={src} width={btn_type==="menu"?"50px":"200px"} height={btn_type==="menu"?"50px":"200px"} layout="fixed"></Image>:children}
    </StyledButton>
  );
}