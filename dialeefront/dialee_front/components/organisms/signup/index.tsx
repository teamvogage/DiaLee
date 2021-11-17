import React, { MutableRefObject, RefObject, useRef, useState } from "react"
import AnimatedDiv from "../../atoms/animatedDiv"
import FlexContainer from '../../atoms/flexcontainer'
import Span from "../../atoms/span"
import Button from "../../atoms/button"
import Input from "../../atoms/input"
import {check,checkPassword} from '../../../lib/js/checkSignUp'
import {sendSignUp,ISendAccountData,sendCheckEmail} from '../../../lib/axios';
import {debounce} from '../../../lib/js/debounce';
type TtextType={
    [key:string]:string;
    username:string;
    password1:string;
    password2:string;
    email:any;
  
}
const SignUp=()=>{
    const defaultText:TtextType={
        username:"1자~8자",
        password1:"특수문자,숫자,영어 포함 8~16",
        password2:"",
        email:"", 
    }
    
    const [text,setText]=useState(defaultText);
    const [pass,setPass]=useState(0);
    const [isUnique,setUnique]=useState(false);
    const userNameRef=useRef<string>();
    const emailRef=useRef<string>();
    const pwdRef=useRef<HTMLInputElement>(null);
    const rePwdRef=useRef<HTMLInputElement>(null);
    function onChange(e:React.ChangeEvent<HTMLInputElement>){
       return debounce(onChangeCallback(e),1000);
    }
    const onFocusOut=async(e:React.FocusEvent<HTMLInputElement>)=>{
     if(text.email=="문제 없음"){
      const res= await sendCheckEmail(e.currentTarget.value);
      console.log(res);
     }
    }
    const onChangeCallback=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const name:string=e.currentTarget.name;
        let value="";
        const newText={...text};
        value=check(name,e.currentTarget.value);
        newText[name]=value;
        if(name.startsWith("password")){
            if(pwdRef.current!==null&&rePwdRef.current!==null){
                if(rePwdRef.current.value!="")
                newText.password2=checkPassword(pwdRef.current.value,rePwdRef.current.value);
            }    
        }else{
            if(name=="username")
            {
                
                userNameRef.current=e.currentTarget.value;
               
            }
            if(name=="email"){
                setUnique(false);
                emailRef.current=e.currentTarget.value; 
                if(isUnique==false&&newText.email=="문제 없음"){
                    newText.email="가입되어 있는 이메일이 있습니다."
                }
            }
        }
       onChangePass(newText)==true?setPass(4):null;
        setText(newText);
    }
    const onChangePass=(newText:TtextType)=>{
        let tPass=0;
        
        for(const i in newText){
            if(newText[i]=="문제 없음"){
            tPass+=1;
           }
        }
        if(tPass==4){
            return true;
        }
        if(pass==4)
        setPass(0);
        return false;
        
    }
    const onSend=async()=>{
        const data:ISendAccountData={
            username:userNameRef.current||"",
            password1:pwdRef.current!=null?pwdRef.current.value:"",
            password2:rePwdRef.current!=null?rePwdRef.current.value:"",
            email:emailRef.current||"",
        }
        await sendSignUp(data);
    }
    return(
        <AnimatedDiv animation="slideInTopAnim" animationTime="1s" animationFill="forwards">
            <FlexContainer align="center" alignItems="center" direction={"column"}> 
                <Span size="15" color={isUnique==true?text.email=="문제 없음"?"blue":"red":"red"} id="checkEmail">{text.email}</Span>    
                <Span size="24" color="black"> 이메일 </Span>
                    <Input name="email" type="email" width={"200px"} auto="off" id="Email" maxlength="50" onFocusOut={onFocusOut} onChange={onChange} ></Input>
                <Span size="15" color={text.username=="문제 없음"?"blue":"red"} id="checkId">{text.username}</Span>
                <Span size="24" color="black"> 활동명 </Span>
                    <Input name="username" width={"200px"} auto="off" id="Id" maxlength="16" onChange={onChange}  ></Input>
                
                <Span size="15" color={text.password1=="문제 없음"?"blue":"red"} id="validateSecret">{text.password1}</Span> 
                <Span size="24" color="black"> 비밀번호 </Span>
                    <Input ref={pwdRef} name="password1" type="password" auto="off" width={"200px"} id="Pwd" maxlength="16" onChange={onChange}  ></Input>
                   
                <Span size="15" color={text.password2=="문제 없음"?"blue":"red"} id="checkSecret" >{text.password2 }</Span>   
                <Span size="24" color="black"> 비밀번호 확인 </Span>
                    <Input ref={rePwdRef} name="password2" type="password" auto="off" width={"200px"} maxlength="16" onChange={onChange} ></Input>
                {pass!=4?null:isUnique===true?<Button  btn_type="ok" onClick={onSend}> 회원가입 </Button>:null}
            </FlexContainer>  
        </AnimatedDiv>
    )
}
export default SignUp;