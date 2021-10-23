
import { ComponentProps, useState } from 'react'
import FlexContainer from '../../atoms/flexcontainer'
import Input from '../../atoms/input'
import Span from '../../atoms/span'
import Button from '../../atoms/button'
import styled from 'styled-components'
import AnimatedDiv from '../../atoms/animatedDiv'
const StyledDiv=styled.div`
    border:2px solid black;
    height:fit-content;
    width:fit-content;
    width:100%
    margin-top: -300px ;
    
  
`

const IdAndPassword=({direction}:ComponentProps<any>)=>{
    const inputSize="small"
    const [isActive,setActive]=useState(false);
    const onActive=(e:MouseEvent)=>{
        e.preventDefault();
        e.stopPropagation();
        setActive(!isActive);
    }

    return(<>
        <Button prefix="/imoticon/Sunflower.png" btn_type="socialNot" onClick={onActive}>일반 로그인</Button>
        {isActive?<FlexContainer align="center" alignItems="center" direction={direction||"row"}>
            <AnimatedDiv animation="slideInTopAnim" animationTime="1s" animationFill="forwards">
            <StyledDiv>
            
            <FlexContainer align="center" alignItems="center" direction={direction||"row"}> 
            
            <Span size="24" color="black"> 아이디 </Span>
            <Input name="id" size={inputSize} placeholder="ID" auto="autocomplete"  maxlength="16" value="gg"  ></Input>
            <Span size="24" color="black"> 비밀번호 </Span>
            <Input name="pwd" size={inputSize} placeholder="password" auto="autocomplete" maxlength="16" value="gg"  ></Input>
            <Button  btn_type="ok"> 로그인 </Button>
            </FlexContainer>
            </StyledDiv>
            </AnimatedDiv>
        </FlexContainer>:null}
   </> )
}
export default IdAndPassword;