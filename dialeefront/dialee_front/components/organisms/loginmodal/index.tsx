import Modal from "../../molecures/modal";
import IdAndPassword from "../../molecures/IdpwdInput";
import Button from '../../atoms/button';
import SocialLoginBtns from "../../molecures/socialLoginBtns";

import styled from "styled-components";
const StyledHr=styled.div`
width:100%;
height:100%;
postion:relative;
border:2px solid dashed;
`
const LoginModal=()=>{
   
    return (
    <Modal top="10%" left="5%" width="90%" height="80%" title="로그인" confirmBtn={<Button btn_type="ok">회원가입</Button> }  zIndex={3499} isCancle="no">
        
        <SocialLoginBtns/>
        <StyledHr/>
        <IdAndPassword direction="column"> </IdAndPassword>
    </Modal>
    )
}
export default LoginModal;