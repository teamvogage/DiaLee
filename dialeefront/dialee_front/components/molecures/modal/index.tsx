import FixedDiv from "../../atoms/fixedDiv"
import { ComponentProps, useState,memo } from "react"
import FlexContainer from '../../atoms/flexcontainer';
import Span from '../../atoms/span';
import Button from '../../atoms/button';
import Image from '../../atoms/image';
import styled from "styled-components";

const StyledModal = styled.div`
background:linear-gradient(180deg,rgba(224,224,224,0.6) 0%, rgba(224,224,148,0.3) 5%, rgba(245,256,220,0.4) 30%, rgba(255,255,255,0.5) 50%, rgba(224,224,255,0.4) 70% ,rgba(225,255,245,0.6) 100%);
z-index:100;
position:absolute;
width:100%;
overflow-y:auto;
height:70%;

transform:translateY(-700px);
animation:slideInTopAnim 3s forwards 1.7s;
`


const Modal=({title,confirmBtn,additionalBtns,children,isCancle,animated,animationDelay}:ComponentProps<any>)=>{
    const [isActive,setActive]=useState(true);
    const allowCancle=isCancle==="no"?false:true;
    const onCancle=(e:MouseEvent)=>{
        e.preventDefault();
        setActive(false);
    }
    return(<>
        {isActive?<>
                <StyledModal > 
                    <FlexContainer direction="column" align="center" alignItems="center" alignContent="center">
                            <FlexContainer height="auto" align="center" direction="column" alignItems="center" flexGrow={2}>   
                                <Span size="30">{title}</Span>
                                {children}
                                <FlexContainer direction="row" align="center" alignItems="center">
                                {confirmBtn?confirmBtn:null}
                                {allowCancle?<Button btn_type="cancle" onClick={onCancle} >취소</Button>:null}
                                </FlexContainer>
                                <br/><br/>
                                {additionalBtns?additionalBtns:<Image src="/imoticon/Anchorpink.png" width="30px"height="30px"/>}
                            </FlexContainer>
                    </FlexContainer>                
                </StyledModal>
    </>:null}
    </>)
}
export default Modal