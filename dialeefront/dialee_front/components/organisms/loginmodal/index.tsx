import Modal from "../../molecures/modal";
import NormalLogin from "../../molecures/normallLoginBtns";
import Button from '../../atoms/button';
import SocialLogin from "../../molecures/socialLoginBtns";

import { useState } from "react";
import SignUp from "../signup";
import useLogin from "../../../lib/hooks/useLogin";
const LoginModal=()=>{
    const [signUp,setSignUp]=useState(false);
    const {login} =useLogin();
    const onLogin=async(email:string,password:string)=>{
        const res=await login(email,password);
        return res||"error";
    }
    const onSignUp=()=>{
        
        return setSignUp(true);
    }
    const onCancleSignUp=()=>{
        return setSignUp(false);
    }
    return (
    <Modal animationDelay="0.7s" animated="on" top="10%"  width="80%" height="fit-content" title="로그인" confirmBtn={signUp==false?<Button btn_type="ok" onClick={onSignUp}>회원가입</Button>:<Button btn_type="cancle" onClick={onCancleSignUp} >그만두고 로그인 하기</Button>}  zIndex={8000} isCancle="no">
        {signUp==true?<SignUp ></SignUp>:<>
        <NormalLogin direction="column" onLogin={onLogin}> </NormalLogin>
        <SocialLogin onLogin={onLogin}/>
     
        </>}

    </Modal>
    )
}
export default LoginModal;