import React, { ComponentProps, useCallback, useRef,useState } from "react";
import Span from "../../atoms/span";
import Input from "../../atoms/input";
import { sendCheckEmail} from "../../../lib/axios";
import { check } from "../../../lib/js/checkSignUp";
import FlexContainer from "../../atoms/flexcontainer";
import Button from "../../atoms/button";
import debounceFunction from "../../../lib/js/debounce";
const EmailInput =({value,onChangeHandler,goToPwd}:ComponentProps<any>) =>{
    const emailRef=useRef<HTMLInputElement>(null);
    const [isUnique,setUnique]=useState(value===""?false:true);
    const [text,setText]=useState(value===""?"":onChangeHandler("voyager_name",value));
    const [inputValue,setInputValue]=useState(value);
    const debouncedChange=useCallback(debounceFunction((name:string,value:string)=>onChangeCallback(name,value),100),[]);
    const onChangeCallback=(name:string,value:string)=>{
        setText("");
        setUnique(false);
        let result=onChangeHandler(name,value);
        if(result==="문제 없음")
        result="중복 체크를 해야 돼요.화면의 빈 곳을 클릭/터치하면 됩니다."
        setText(result);
    }
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        
            setInputValue(e.currentTarget.value);
            debouncedChange(e.currentTarget.name,e.currentTarget.value);
    }
    
   
    const onBlur=async()=>
    { 
        let newText=text;
        if(emailRef.current){
            if(check("email",emailRef.current.value)==="문제 없음"){
            const res:any=await sendCheckEmail(emailRef.current.value);
           
        
            if(res.data.is_valid==true){
                newText="문제 없음";
               
                setUnique(true); 
                setText(newText);  
                return true;
            }  
            else{
                
                newText=res.data.message;
                setUnique(false);
                
            }
            if(!res)
                newText="인터넷 오류 발생";
            if(!res.data)
                newText="인터넷 오류 발생";
            
            }
            setText(newText);
            return false;
        }
        return false;
    }
    return(   
    <> 
        <Span size="15" background="rgba(255,255,255,0.5)" color={isUnique==true?text=="문제 없음"?"blue":"red":"red"} id="checkEmail">{text}</Span>    
        <Span size="24" color="black"> 이메일 </Span>
        <Input ref={emailRef} name="email" type="email"  width={"200px"} auto="off" value={inputValue} id="Email" maxlength="50" onChange={onChange} onBlur={onBlur} ></Input>
        <FlexContainer align ="center" direction="column" alignItems="center"> 
            <Span size="18"  color="black">이메일을 입력해주세요.</Span>
            <Span size="18"  color="black">이메일은 로그인할 때 사용됩니다.</Span> 
            <br/>
            <br/>     
        </FlexContainer>
        {isUnique===true?<Button btn_type="ok" onClick={function(){goToPwd("email",emailRef.current?.value)}}>비밀번호</Button>:<Button btn_type="okNotAllowed">비밀번호</Button>}
    </>)
}
export default EmailInput;