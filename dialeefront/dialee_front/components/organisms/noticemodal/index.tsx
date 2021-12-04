
import Modal from "../../molecures/modal"
import Router from 'next/router'
import Button from "../../atoms/button"
import { ComponentProps } from "react"
const NoticeModal=({setNotice}:ComponentProps<any>)=>{
    const onClick=()=>{
        setNotice(false);
        Router.push('/');
    }
    return(
    <Modal animationDelay="0.7s" animated="on" top="10%"  width="80%" height="fit-content" title="로그인" confirmBtn={<Button btn_type="cancle" onClick={onClick} >오케이 </Button>}  zIndex={8000} isCancle="no">
        오 이런. 로그인을 해야돼요.

    </Modal>
    )
}
export default NoticeModal;