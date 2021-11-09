import React, { MutableRefObject, RefObject, useRef, useState } from "react"
import AnimatedDiv from "../../atoms/animatedDiv"
import FlexContainer from '../../atoms/flexcontainer'
import Span from "../../atoms/span"
import Button from "../../atoms/button"
import Input from "../../atoms/input"
import {check,checkPassword} from '../../../lib/js/checkSignUp'
import {sendSignUp,ISendAccountData} from '../../../lib/axios';
type TtextType={
    [key:string]:string;
    username:string;
    password1:string;
    password2:string;
    email:string;
  
}
const SignUp=()=>{
    const defaultText:TtextType={
        username:"1자~8자",
        password1:"특수문자,숫자,영어 포함 8~16",
        password2:"",
        email:"", 
    }
    const defaultSendData:ISendAccountData={
        username:"",
        password1:"",
        password2:"",
        email:"",
    }
    const [text,setText]=useState(defaultText);
    const [pass,setPass]=useState(0);
    const [data,setData]=useState(defaultSendData);
    const pwdRef=useRef<string>();
    const rePwdRef=useRef<string>();
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const name:string=e.currentTarget.name;
        let value="";
        const newText={...text};
        const newData={...data};
        if(name=="rePwd"){
            
            rePwdRef.current=e.currentTarget.value;
            if(pwdRef.current)
            value=checkPassword(pwdRef.current,e.currentTarget.value);
        }else{
           
            value=check(name,e.currentTarget.value);
        }
        if(name=="Pwd"){
            pwdRef.current=e.currentTarget.value;
            if(rePwdRef.current)
            newText.rePwd=checkPassword(rePwdRef.current,e.currentTarget.value);
        }
        newData[name]=e.currentTarget.value;
        newText[name]=value;
        onChangePass(newText);
        setText(newText);
        setData(newData);
    }
    const onChangePass=(newText:TtextType)=>{
        let tPass=0;
        
        for(const i in newText){

           if(newText[i]=="문제 없음"){
            tPass+=1;
           }
           
        }
        setPass(tPass);
    
    }
    const onSend=()=>{
        sendSignUp(data);
    }
    return(
        <AnimatedDiv animation="slideInTopAnim" animationTime="1s" animationFill="forwards">
            <FlexContainer align="center" alignItems="center" direction={"column"}> 
                <Span size="15" color={text.Id=="문제 없음"?"blue":"red"} id="checkId">{text.Id}</Span>
                <Span size="24" color="black"> 아이디 </Span>
                    <Input name="Id" width={"200px"} auto="off"  id="Id"  maxlength="16" onChange={onChange}  ></Input>
                
                <Span size="15" color={text.Pwd=="문제 없음"?"blue":"red"} id="validateSecret">{text.Pwd}</Span> 
                <Span size="24" color="black"> 비밀번호 </Span>
                    <Input name="Pwd"  type="password" auto="off" width={"200px"} id="Pwd"  maxlength="16" onChange={onChange}  ></Input>
                   
                <Span size="15" color={text.rePwd=="문제 없음"?"blue":"red"} id="checkSecret" >{text.rePwd }</Span>   
                <Span size="24" color="black"> 비밀번호 확인 </Span>
                    <Input name="rePwd"   type="password" auto="off" width={"200px"}  maxlength="16"  onChange={onChange} ></Input>
                
              
                <Span size="15" color={text.Email=="문제 없음"?"blue":"red"} id="checkEmail">{text.Email}</Span>    
                <Span size="24" color="black"> 이메일 </Span>
                    <Input name="Email" width={"200px"} auto="off" id="Email" maxlength="16"  onChange={onChange} ></Input>
                   
                {pass!=4?<Button  btn_type="no" > 회원가입 </Button>:<Button  btn_type="ok" onClick={onSend}> 회원가입 </Button>}
            </FlexContainer>  
        </AnimatedDiv>
    )
}
export default SignUp;