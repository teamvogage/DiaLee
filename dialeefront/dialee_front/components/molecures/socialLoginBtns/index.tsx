import ButtonList from "../buttonlist"
import Button from "../../atoms/button"
import Span from "../../atoms/span"
import FlexContainer from "../../atoms/flexcontainer"
import { ComponentProps } from "react"
const SocialLoginBtns=({direction,onLogin}:ComponentProps<any>)=>{
    
    return(
        <FlexContainer align="center" alignItems="center" direction={direction||"column"}>
            <Span size="30" color="black">소셜 로그인</Span>
           
                <Button prefix="/Googlebtn.png" btn_type="socialGoogle">구글 로그인</Button>
                <Button prefix="/Kakaobtn.png" btn_type="socialKakao">카카오 로그인</Button>
            
        </FlexContainer>
    )
}
export default SocialLoginBtns;
