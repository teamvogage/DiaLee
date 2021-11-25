
import { ComponentProps, useState,useRef } from 'react'
import FlexContainer from '../../atoms/flexcontainer'
import Input from '../../atoms/input'
import Span from '../../atoms/span'
import Button from '../../atoms/button'
import styled from 'styled-components'
import AnimatedDiv from '../../atoms/animatedDiv'
import CheckBox from '../../atoms/checkbox'
import { sendLogin } from '../../../lib/axios'
const StyledDiv=styled.div`
    border:2px solid black;
    height:fit-content;
    width:fit-content;
    width:100%
    margin-top: -300px ;
    
  
`

const IdAndPassword=({direction,onLogin,onClickHandler}:ComponentProps<any>)=>{
    const [text,setText]=useState("");
    const [isActive,setActive]=useState(false);
    const emailRef=useRef<HTMLInputElement>(null);
    const pwdRef=useRef<HTMLInputElement>(null);
    const onActive=(e:MouseEvent)=>{
        e.preventDefault();
        e.stopPropagation();
        onClickHandler();
        setActive(!isActive);
    }
    const onClick=async()=>{
      const msg= await onLogin(emailRef.current?.value,pwdRef.current?.value);
      setText(msg);
    }
    return(<>
        <FlexContainer align="center" direction="column" alignItems="center">
            <Span size="30" color="black">일반 로그인</Span>
            <Button prefix="/imoticon/SunFlower.png" btn_type="socialNot" onClick={onActive}>일반 로그인</Button>
            <Span size="15" color="red">{text}</Span>
        {isActive?<FlexContainer align="center" alignItems="center" direction={direction||"row"}>
            <AnimatedDiv animation="slideInTopAnim" animationTime="1s" animationFill="forwards">
            <StyledDiv>
            
            <FlexContainer align="center" alignItems="center" direction={direction||"row"}> 
            
            <Span size="24" color="black"> 이메일 </Span>
            <Input ref={emailRef} name="id"  placeholder="email" auto="autocomplete"  maxlength="16"   ></Input>
            <Span size="24" color="black"> 비밀번호 </Span>
            <Input ref={pwdRef} name="pwd"  placeholder="password" auto="autocomplete" maxlength="16"   ></Input>
            
            <Button  btn_type="ok" onClick={onClick}> 로그인 </Button>
            <Button  btn_type="small"> 비밀번호 찾기 </Button>
            </FlexContainer>
            </StyledDiv>
            </AnimatedDiv>
        </FlexContainer>:null}
        </FlexContainer>
   </> )
}
export default IdAndPassword;