import Modal from "../../molecures/modal";
import NormalLogin from "../../molecures/normallLoginBtns";
import Button from '../../atoms/button';
import SocialLogin from "../../molecures/socialLoginBtns";
import CheckBox from "../../atoms/checkbox";
import { useState,useRef } from "react";
import SignUp from "../signup";
import useLogin from "../../../lib/hooks/useLogin";
import useCookie from "../../../lib/hooks/useCookie";
import useLoading from "../../../lib/hooks/useLoading";
const LoginModal=()=>{
    const [signUp,setSignUp]=useState(false);
    const [isNormal,setNormal]=useState(false);
     
    const {loadingOn,loadingOff}=useLoading();
    const autoLoginRef=useRef<HTMLInputElement>(null);
    const {login} =useLogin();
    const {setCookie}=useCookie();
    const onLogin=async(email:string,password:string)=>{
        loadingOn();
        const res=await login(email,password);
        loadingOff();
        return res||"error";
    }
    const onSignUp=()=>{
        
        return setSignUp(true);
    }
    const onCancleSignUp=()=>{
        setNormal(false);
        return setSignUp(false);
    }
    const onChecked=()=>{
      
        setCookie("auto_login_temp",`${autoLoginRef.current?.checked}`);
    }
    return (
    <Modal animationDelay="0.7s" animated="on" top="10%"  width="80%" height="fit-content" title="로그인" confirmBtn={signUp==false?<Button btn_type="ok" onClick={onSignUp}>회원가입</Button>:<Button btn_type="cancle" onClick={onCancleSignUp} >뒤로 </Button>}  zIndex={8000} isCancle="no">
        {signUp==true?<SignUp ></SignUp>:<>
        <NormalLogin direction="column" onLogin={onLogin} onClickHandler={()=>setNormal(!isNormal)}> </NormalLogin>
        {isNormal===false&&<SocialLogin onLogin={onLogin}/>}
         <CheckBox ref={autoLoginRef} width="20px" height="20px" onChange={onChecked} labelSize="14px" >자동 로그인</CheckBox>
        </>}

    </Modal>
    )
}
export default LoginModal;