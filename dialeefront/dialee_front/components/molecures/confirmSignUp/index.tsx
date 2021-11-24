import { ComponentProps, useState } from "react";
import FlexContainer from "../../atoms/flexcontainer";
import Span from "../../atoms/span";
import Button from "../../atoms/button";
const ConfirmSignUp=({data,onDataSend,goToUserName}:ComponentProps<any>)=>{
    const dataKey=Object.keys(data);
    const [message,setMessage]=useState("당신의 회원가입 정보입니다.");
    const [isValid,setValid]=useState(false);
    const datas=dataKey.map((value)=>{
        
        if(value==="voyager_name")
           return <Span key="confirm1" size="18px">{`당신의 활동명은 [${data[value]}]입니다.`}</Span>
        if(value==="email")
          return  <Span key="confirm2" size="18px">{`당신의 이메일은 [${data[value]}] 이구요.`}</Span>
        if(value==="password1")
          return <Span key="confirm3" size="18px">당신의 비밀번호는 제가 비밀로 간직해놓겠습니다 .</Span>
    }) 
    const onClick=async ()=>{
      const res=await onDataSend(data);
      
      if(res.data.is_valid===true){
        setValid(true);
        setMessage("회원가입이 완료되었습니다! 아래 버튼을 눌러서 로그인을 진행해주세요~!");
       } else{
        setValid(false);
        setMessage(res.data.message);
      }
    }
    return(
    <FlexContainer direction="column" align="center" alignItems="center">
        {isValid===false?<Button btn_type="ok" onClick={()=>goToUserName()}> 뒤로 </Button>:null}
        <br/>
        {message==="당신의 회원가입 정보입니다."?datas:message}
        <br/>
        {isValid===false?<Button btn_type="ok" onClick={onClick} >회원가입</Button>:null}
    </FlexContainer>
    )
}
export default ConfirmSignUp