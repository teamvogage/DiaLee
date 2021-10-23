import FixedDiv from "../../atoms/fixedDiv"
import { ComponentProps, useState } from "react"
import FlexContainer from '../../atoms/flexcontainer';
import Span from '../../atoms/span';
import Button from '../../atoms/button';
import Image from '../../atoms/image';



const Modal=({top,left,width,height,zIndex,title,confirmBtn,additionalBtns,children,isCancle}:ComponentProps<any>)=>{
    const [isActive,setActive]=useState(true);
    const allowCancle=isCancle==="no"?false:true;
    const onCancle=(e:MouseEvent)=>{
        e.preventDefault();
        setActive(false);
    }
    return(<>
        {isActive?<FixedDiv background="rgba(255,255,255,0.001)" top="0%" left="0%" width="100%" height="100%" zIndex={zIndex||3000}>
                <FixedDiv background="radial-gradient( rgba(245,256,220,1) 10%, rgba(234,234,139,1) 90%, rgba(224,224,148,1) 90%,rgb(67,63,47) 100%);" top={top||'5%'} left={left||'5%'} width={width||'90%'} height={height||'90%'}>  </FixedDiv>
                <FixedDiv  background="radial-gradient(ellipse,rgba(67,63,47,0.01) 0%, rgba(224,224,148,0.01) 5%, rgba(245,256,220,0.1) 12%, rgba(234,234,139,0.7) 90%, rgba(67,63,47,1) 95%,rgba(67,63,47,1) 100%);" top={top||'5%'} left={left||'5%'} width={width||'90%'} height={height||'90%'} /> 
                <FixedDiv  background="linear-gradient(180deg,rgba(67,63,47,1) 0%, rgba(224,224,148,0.3) 5%, rgba(245,256,220,0.2) 12%, rgba(234,234,139,0.1) 90%, rgba(224,224,148,0.3) 95%,rgba(67,63,47,1) 100%);" top={top||'5%'} left={left||'5%'} width={width||'90%'} height={height||'90%'} > 
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
                    {additionalBtns?additionalBtns:<Image src="/imoticon/Anchor.png" width="30px"height="30px"/>}
                    </FlexContainer>
                </FlexContainer>  
        
        </FixedDiv>
    </FixedDiv>:null}
    </>)
}
export default Modal