import Header from "../../organisms/header"
import Footer from "../../organisms/footer";
import FlexContainer from '../../atoms/flexcontainer'
import SlideMenu from "../../organisms/slidemenu";
import disabledMainState from "../../../atom/disabledMainState";
import CoverDiv from "../../molecures/coverDiv";
import { ComponentProps, useEffect, useState } from "react"

import styled from 'styled-components';
import { useRecoilValue } from "recoil";
const MainContainer=styled.div<{active:boolean}>`
display:flex;
flex-direction:row;
height:200%;
width:100%;
transform:translateX(${({active})=>active===false?`-192px`:`100px`});
transition:transform 1s;
`
const StyledSection=styled.section`
font-size:30px;
width:95%;
margin-left: 10px;
text-align:center;
`
const StyledMain =styled.main`
height:100vh;
max-height:800px;

max-width:680px;
width:100vw;
position:relative;

overflow:visible;

display:flex;
flex-direction:column;
justify-content:flex-start;

        border-bottom:2px solid black;
        border-top:2px solid black;
      
        white-space:pre-line;
        overflow:visible;
        background-color:white;
    
`
const StyledPaper=styled.div`
  
  width:40px;
  height:100vh;
  max-height:800px;
 
  margin-top:1vh;
  positon:absolute;
  margin-left:-40px;
  z-index:2;
 
  
  
  background-image:url("/Paper.png");
`
const WithMenuTemplate=({children}:ComponentProps<any>)=>{
    const isDisabledMain=useRecoilValue(disabledMainState);
   
      return (<MainContainer active={isDisabledMain}>
                <SlideMenu></SlideMenu>
                <FlexContainer direction="row" align="start">
                  <StyledPaper/>
                  <FlexContainer direction= "column" align="start">
                          <StyledMain >
                          <Header/>
                          {isDisabledMain===true?<CoverDiv></CoverDiv>:null} 
                              <StyledSection>
                              {children}    
                              </StyledSection>
                              {<Footer/>} 
                          </StyledMain>                             
                  </FlexContainer> 
                </FlexContainer>   
        </MainContainer>  )   
      }
export default WithMenuTemplate;