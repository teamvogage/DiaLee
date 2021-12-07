
import Modal from "../../molecures/modal"
import Router from 'next/router'
import Button from "../../atoms/button"
import Span from "../../atoms/span"
import Image from "next/dist/client/image"
import { ComponentProps } from "react"
import useLoading from "../../../lib/hooks/useLoading"
const NoticeModal=({setNotice,message}:ComponentProps<any>)=>{
    const {loadingFake }= useLoading();
    const onClick=()=>{
       
     loadingFake(4000,()=>{ setNotice(false);return Router.push('/');});
        
    }

    return(
    <Modal  animated={false}  title="로그인 해야됨." confirmBtn={<Button btn_type="cancle" onClick={onClick} >오케이 </Button>}  zIndex={8000} isCancle="no">
        
        <Image src="/Error.png" width="300px" height="300px" alt="error"></Image>
        <Span size="20" >{message}</Span>

    </Modal>
    )
}
export default NoticeModal;