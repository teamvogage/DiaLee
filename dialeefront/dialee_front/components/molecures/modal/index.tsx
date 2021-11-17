import FixedDiv from "../../atoms/fixedDiv"
import { ComponentProps, useState,memo } from "react"
import FlexContainer from '../../atoms/flexcontainer';
import Span from '../../atoms/span';
import Button from '../../atoms/button';
import Image from '../../atoms/image';
import styled from "styled-components";

const StyledModal = styled.div<{animated:string,animationDelay:string}>`
background:linear-gradient(180deg,rgba(224,224,224,0.6) 0%, rgba(224,224,148,0.3) 5%, rgba(245,256,220,0.4) 30%, rgba(255,255,255,0.5) 50%, rgba(224,224,255,0.4) 70% ,rgba(225,255,245,0.6) 100%);
z-index:8000;
position:absolute;
max-width:70%;
mint-width:70%;
width:70%;
transform:${props=>props.animated=="on"?"translateY(-600px)":"none"};
height:fit-content;
animation:${props=>props.animated=="on"?"slideInTopAnim 3s forwards":"none"};

    @keyframes slideInTopAnim{
        from{
           
            transform: translateY(-600px);
        }
        to{
            transform: translateY(0px);
        }
    };
animation-delay: ${props=>props.animationDelay?props.animationDelay:"0s"};
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
                    <StyledModal animated={animated} animationDelay={animationDelay}> 
                    <FlexContainer direction="column" align="center" alignItems="flex-start">
                    
                    <FlexContainer width="100%" flexGrow="1" direction="row" align="center" alignItems="center" >
                        <Span size="30">{title}</Span>
                    </FlexContainer>
                
                    <FlexContainer width="100%" direction="row" flexGrow="4" align="center" alignItems="center" >
                        <section className="modalSection">
                            {children}
                        </section> 
                    </FlexContainer>  
                    
                    <FlexContainer width="100%"  direction="row" flexGrow="2" align="center" alignItems="stretch" >
                        <FlexContainer direction="row" align="center" alignItems="center">
                
                        {confirmBtn?confirmBtn :null}
                    
                        {allowCancle?<Button btn_type="cancle" onClick={onCancle} >취소</Button>:null}
                
                        </FlexContainer>
                    </FlexContainer>   
                    <FlexContainer width="100%" flexGrow="1" direction="row" align="center" alignItems="center" >
                    {additionalBtns?additionalBtns:<Image src="/imoticon/Anchorpink.png" width="30px"height="30px"/>}
                    </FlexContainer>
                </FlexContainer>  
        
        </StyledModal>
    </>:null}
    </>)
}
export default Modal