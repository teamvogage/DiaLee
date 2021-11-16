import Header from "../../organisms/header"
import FlexContainer from '../../atoms/flexcontainer'
import SlideMenu from "../../organisms/slidemenu";
import disabledMainState from "../../../atom/disabledMainState";
import DisabledDiv from "../../molecures/mainloading";
import { ComponentProps } from "react"

import styled from 'styled-components';
import { useRecoilValue } from "recoil";

const StyledMain =styled.main<{isDisabledMain:boolean}>`
height:800px;

margin-top:-2px;
overflow:visible;
width:100vw;
display:flex;
justify-content:center;

        border-bottom:2px solid black;
        border-top:2px solid black;
        border-right:4px solid black;
        white-space:pre-line;
        overflow:visible;
        background-color:white;
    
`
const StyledPaper=styled.div`
  
  width:40px;
  height:800px;
  margin-top:0px;
  positon:absolute;
  margin-left:-40px;
  z-index:2;
 
  
  
  background-image:url("/Paper.png");
`
const Main=({children}:ComponentProps<any>)=>{
    const isDisabledMain=useRecoilValue(disabledMainState);
    console.log(isDisabledMain);
return (<>
          <SlideMenu></SlideMenu>
<FlexContainer direction="row" align="start">
            <StyledPaper/>
            <FlexContainer direction= "column" align="start">
                    <StyledMain isDisabledMain={!isDisabledMain}>
                    <Header/>
                    {isDisabledMain?<DisabledDiv></DisabledDiv>:null} 
                        <section>
                        {children}    
                        </section>
                    </StyledMain>                             
            </FlexContainer> 
        </FlexContainer>   
  </>  )   
}
export default Main;