import Span from "../../atoms/span";
import Input from "../../atoms/input";
import FlexContainer from "../../atoms/flexcontainer";
import React, { ComponentProps, useRef,useState,useCallback } from "react";
import Button from "../../atoms/button";
import debounceFunction from "../../../lib/js/debounce";
const PwdInput=({value,onChangeHandler,goToEmail,goToUserName}:ComponentProps<any>)=>{
    const pwdRef=useRef<HTMLInputElement>(null);
    const [text,setText]=useState(value===""?"":onChangeHandler("password1",value));
    const [pass,setPass]=useState(value===""?false:true);
    const [inputValue,setInputValue]=useState(value);
    const debouncedChange=useCallback(debounceFunction((name:string,value:string)=>onChangeCallback(name,value),100),[]);
    const onChangeCallback=(name:string,value:string)=>{
        setText("");
        setPass(false);
        const result=onChangeHandler(name,value);
        if(result==="문제 없음"){
            setPass(true);
        }
        setText(result);
    }
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
            
            setInputValue(e.currentTarget.value);
            debouncedChange(e.currentTarget.name,e.currentTarget.value);
    }

    return(<>
            <Span size="15" background="rgba(255,255,255,0.5)" color={text=="문제 없음"?"blue":"red"} id="validateSecret">{text}</Span> 
            <Span size="24" color="black"> 비밀번호 </Span>
                <Input ref={pwdRef} name="password1" value={inputValue} type="password" auto="off" width={"200px"} id="Pwd" maxlength="16" onChange={onChange}  ></Input>
                <FlexContainer align ="center" direction="column" alignItems="center"> 
            <Span size="18"  color="black">비밀번호를 입력해주세요.</Span>
            <Span size="18"  color="black">비밀번호는 특수문자 포함</Span> 
            <Span size="18"  color="black">영어,숫자 조합으로 8글자에서 16글자 까지입니다.</Span>
            <br/>
            <br/>
            <FlexContainer direction="row" >
                <Button btn_type="ok" onClick={()=>goToEmail("password1",pwdRef.current?.value)}>이메일</Button>
                {pass===true?<Button btn_type="ok" onClick={()=>goToUserName("password1",pwdRef.current?.value)}>활동명</Button>:<Button btn_type="okNotAllowed">활동명</Button>}
            </FlexContainer>
        </FlexContainer>
    </>)
}
export default PwdInput;