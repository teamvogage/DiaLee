import Span from "../../atoms/span"
import Input from "../../atoms/input"
import FlexContainer from "../../atoms/flexcontainer"
import Button from "../../atoms/button"
import React, { ComponentProps, useCallback, useMemo, useRef, useState } from "react"
import debounce from '../../../lib/js/debounce'
const UserNameInput=({value,onChangeHandler,goToPwd,goToConfirm}:ComponentProps<any>)=>{
    const userNameRef=useRef<HTMLInputElement>(null);

    const [text,setText]=useState(value===""?"":onChangeHandler("voyager_name",value));
    const [pass,setPass]=useState(false);
    const [inputValue,setInputValue]=useState(value);
    const debouncedChange=useCallback(debounce((name:string,value:string)=>onChangeCallback(name,value),200),[]);
    const onChangeCallback=(name:string,value:string)=>{
       
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
        <Span size="15" background="rgba(255,255,255,0.5)" color={text=="문제 없음"?"blue":"red"} id="checkId">{text}</Span>
        <Span size="24" color="black"> 활동명 </Span>
        <Input ref={userNameRef} name="username" value={inputValue}  width={"200px"} auto="off" id="Id" maxlength="16" onChange={onChange}  ></Input>
        <FlexContainer align ="center" direction="column" alignItems="center"> 
            <Span size="18"  color="black">활동명을 입력해주세요.</Span>
            <Span size="18"  color="black">활동명은 1글자 이상 8글자 이하여야해요.</Span> 
            <Span size="18"  color="black">언제든지 바꿀 수 있어요!</Span>
            <br/>
            <br/>
            <FlexContainer direction="row">
                <Button btn_type="ok" onClick={()=>goToPwd("voyager_name",userNameRef.current?.value)}>비밀번호</Button>
                {pass===true?<Button btn_type="ok" onClick={()=>goToConfirm("voyager_name",userNameRef.current?.value)}>확인하기</Button>:<Button btn_type="okNotAllowed">확인하기</Button>}
            </FlexContainer>
        </FlexContainer>
    </>)
}
export default UserNameInput