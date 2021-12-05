
import Modal from "../../molecures/modal"
import Router from 'next/router'
import Button from "../../atoms/button"
import Span from "../../atoms/span"
import { ComponentProps } from "react"
const NoticeModal=({setNotice}:ComponentProps<any>)=>{
    const onClick=()=>{
        setNotice(false);
        Router.push('/');
    }
    return(
    <Modal  animated={false}  title="로그인 해야됨." confirmBtn={<Button btn_type="cancle" onClick={onClick} >오케이 </Button>}  zIndex={8000} isCancle="no">
        <Span size="20" >오 이런. 로그인을 해야됩니다.</Span>

    </Modal>
    )
}
export default NoticeModal;