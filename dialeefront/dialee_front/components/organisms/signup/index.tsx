import React, { ComponentProps, MutableRefObject, RefObject, useRef, useState } from "react"
import AnimatedDiv from "../../atoms/animatedDiv"
import FlexContainer from '../../atoms/flexcontainer'
import Button from "../../atoms/button"
import {check} from '../../../lib/js/checkSignUp'
import {sendSignUp,ISendAccountData} from '../../../lib/axios';
import VoyagerNameInput from '../../molecures/usernameInput';
import PwdInput from '../../molecures/pwdInput';
import EmailInput from '../../molecures/emailInput';
import ConfirmSignUp from "../../molecures/confirmSignUp"

const SignUp=()=>{
  
    const defaultData:ISendAccountData={
        email:"",
        voyager_name:"",
        password1:"",
        password2:"",
       
    }
    const [data,setData]=useState(defaultData);

    const [stage,setStage]=useState("email");
   
    const changeText=(name:string,value:string)=>{
        console.log(data);
        const newData={...data};
        newData[name]=value;
        setData(newData);
    }
    const goToPwd=(name:string,value:string)=>{
        
        changeText(name,value);
        setStage("password");
    }   
    const goToEmail=(name:string,value:string)=>{
        changeText(name,value);
        setStage("email");
    } 
    const goToUserName=(name:string,value:string)=>{
        if(name)
        changeText(name,value);
        setStage("voyager_name");
    }
    const goToConfirm=(name:string,value:string)=>{
        if(name)
        changeText(name,value);
        setStage("confirm");
    }
   
  
    const onChangeCallback=(name:string,value:string)=>{
       
       return check(name,value);
        
    }
    const onDataSend=async()=>{
        const newData={...data};
        newData.password2=newData.password1;
        setData(newData);
         const res=await sendSignUp(newData);
         return res;
     }
   
    return(
        <AnimatedDiv animation="slideInTopAnim" animationTime="1s">
            <FlexContainer height="auto" align="center" alignItems="center" direction="column"> 
                {stage==="email"&&<EmailInput value={data.email} onChangeHandler={onChangeCallback} goToPwd={goToPwd}/>}
                {stage==="password"&&<PwdInput value={data.password1} onChangeHandler={onChangeCallback} goToUserName={goToUserName} goToEmail={goToEmail}/>}
                {stage==="voyager_name"&&<VoyagerNameInput value={data.voyager_name} onChangeHandler={onChangeCallback} goToPwd={goToPwd} goToConfirm={goToConfirm}/>}
                {stage==="confirm"&&<ConfirmSignUp data={data} onDataSend={onDataSend} goToUserName={goToUserName} ></ConfirmSignUp>}
            </FlexContainer>  
        </AnimatedDiv>
    )
}
export default SignUp;