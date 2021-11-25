import Header from "../header"
import Footer from "../footer";
import FlexContainer from '../../atoms/flexcontainer'
import SlideMenu from "../slidemenu";
import disabledMainState from "../../../atom/disabledMainState";
import CoverDiv from "../../molecures/coverDiv";
import { ComponentProps } from "react"

import styled from 'styled-components';
import { useRecoilValue } from "recoil";

const StyledMain =styled.main`
height:100vh;
position:relative;
margin-top:-2px;
overflow:visible;

display:flex;
justify-content:center;

        border-bottom:2px solid black;
        border-top:2px solid black;
      
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
    
      return (<>
                <SlideMenu></SlideMenu>
                <FlexContainer direction="row" align="start">
                  <StyledPaper/>
                  <FlexContainer direction= "column" align="start">
                          <StyledMain >
                          <Header/>
                          {isDisabledMain===true?<CoverDiv></CoverDiv>:null} 
                              <section>
                              {children}    
                              </section>
                              {<Footer/>} 
                          </StyledMain>                             
                  </FlexContainer> 
                </FlexContainer>   
        </>  )   
      }
export default Main;