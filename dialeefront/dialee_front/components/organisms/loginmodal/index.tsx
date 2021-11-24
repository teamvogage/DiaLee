import Modal from "../../molecures/modal";
import IdAndPassword from "../../molecures/normallLoginBtns";
import Button from '../../atoms/button';
import SocialLoginBtns from "../../molecures/socialLoginBtns";

import { useState } from "react";
import SignUp from "../signup";

const LoginModal=()=>{
    const [signUp,setSignUp]=useState(false);
    const onSignUp=()=>{
        
        return setSignUp(true);
    }
    const onCancleSignUp=()=>{
        return setSignUp(false);
    }
    return (
    <Modal animationDelay="0.7s" animated="on" top="10%"  width="80%" height="fit-content" title="로그인" confirmBtn={signUp==false?<Button btn_type="ok" onClick={onSignUp}>회원가입</Button>:<Button btn_type="cancle" onClick={onCancleSignUp} >로그인</Button>}  zIndex={8000} isCancle="no">
        {signUp==true?<SignUp onSendSignUp={onCancleSignUp}></SignUp>:<>
        <SocialLoginBtns/>
         <IdAndPassword direction="column"> </IdAndPassword>
        </>}

    </Modal>
    )
}
export default LoginModal;