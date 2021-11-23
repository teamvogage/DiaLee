import { ComponentProps } from "react";
import FlexContainer from "../../atoms/flexcontainer";
import Span from "../../atoms/span";
import Button from "../../atoms/button";
const ConfirmSignUp=({data,onDataSend,goToUserName}:ComponentProps<any>)=>{
    const dataKey=Object.keys(data);
    const datas=dataKey.map((value)=>{
        
        if(value==="voyager_name")
           return <Span key="confirm1" size="18px">{`당신의 활동명은 [${data[value]}]입니다.`}</Span>
        if(value==="email")
          return  <Span key="confirm2" size="18px">{`당신의 이메일은 [${data[value]}] 이구요.`}</Span>
        if(value==="password1")
          return <Span key="confirm3" size="18px">당신의 비밀번호는 제가 비밀로 간직해놓겠습니다 .</Span>
    })  
    return(
    <FlexContainer direction="column" align="center" alignItems="center">
      

        <Button btn_type="ok" onClick={()=>goToUserName()}> 뒤로 </Button>
        <br/>
        {datas}
        <br/>
        <Button btn_type="ok" onClick={()=>onDataSend(data)} >회원가입</Button>
    </FlexContainer>
    )
}
export default ConfirmSignUp