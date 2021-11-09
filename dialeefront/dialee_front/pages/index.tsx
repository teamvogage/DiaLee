import type { NextPage } from 'next'
import React, { useState,useMemo, useCallback } from 'react'
import styled from 'styled-components'
import LoginModal from '../components/organisms/loginmodal'
import HomeDiv from '../components/atoms/homeDiv'
import SlideMenu from '../components/organisms/slidemenu'
import Main from '../components/templates/Main'
import FlexContainer from '../components/atoms/flexcontainer'
import Footer from '../components/organisms/footer'
import AnimatedDiv from '../components/atoms/animatedDiv'
import Image from '../components/atoms/image'
import StyledBodyContainer from '../components/templates/Body'
let PageWaveCover1=styled.div<{clicked:string}>`
will-change: transform height; 
height:${({clicked})=>clicked==="true"?'300vh':'200vw'};

  width:200vw;
  position:absolute;
  left:-80%;
  top:${({clicked})=>clicked==="true"?'-60%':'70%'};
  background: linear-gradient(#590995 ,#03C4A1);
  border:2px #590995 solid;
  max-width: 1700px;
  max-height:1700px;
  transform-origin: 50% 48%;
  border-radius: 39%;
  animation:wave2  30s linear infinite;
  @keyframes wave2{
    0% {  transform: rotate(0deg); }
    25%{   transform: rotate(180deg);}
    50% {transform:  rotate(360deg) ; }
    75% { transform:  rotate(540deg) ; }
    100%{ transform:  rotate(720deg) ;}
  };

  transition:4s;
  
`
let PageWaveCover2=styled.div<{clicked:string}>`
will-change: transform height; 
  height:${({clicked})=>clicked==="true"?'300vh':'200vw'};
  width:200vw;
  position:absolute;
  left:-50%;
  top:${({clicked})=>clicked==="true"?'-60%':'70%'};
  background:${({clicked})=>clicked==="true"?'linear-gradient(#590995 ,#03C4A1);':'linear-gradient(#590995 ,#03C4A1);'}; 
  border:2px #03C4A1 solid;
  max-width: 1700px;
  max-height:1700px;
  transform-origin: 50% 48%;
  border-radius: 39%;
  animation:wave1   30s linear infinite;
  @keyframes wave1{
    0% { transform: rotate(0deg); }
    25%{  transform: rotate(180deg);}
    50% {transform:  rotate(360deg) ; }
    75% {transform:  rotate(540deg) ; }
    100%{ transform:  rotate(720deg) ;}
  };
  transition:4s;
  
`
let PageWaveCover3=styled.div<{clicked:string}>`
  will-change: transform height; 
  height:${({clicked})=>clicked==="true"?'300vh':'200vw'};
  width:200vw;
  position:absolute;
  left:-10%;
  top:${({clicked})=>clicked==="true"?'-60%':'70%'};
  background: linear-gradient(#590995 ,#03C4A1);
  border:2px #590995 solid;
  max-width: 1700px;
  max-height:1700px;
  transform-origin: 53% 47%;
  border-radius: 42%;
  animation:wave3   30s linear infinite;
  @keyframes wave3{
    0% { transform: rotate(0deg); }
    25%{  transform: rotate(180deg);}
    50% {transform:  rotate(360deg) ; }
    75% {transform:  rotate(540deg) ; }
    100%{transform:  rotate(720deg) ;}
  };

  transition:4s;
  
`

const MoonDiv=styled.div<{clicked:string}>`
  border-radius:100%;
  background:linear-gradient(rgba(255,255,255,0.01),rgba(255,255,255,0.9));
  position:absolute;
  width:70px;
  z-index:40;
  height:70px;
  top:20%;
  left:46%;
  transform:${({clicked})=>clicked==="true"?'translateY(-2000px) scale(80%)':'none'};
  transition:3s;
  will-change: transform;
  animation:upAnimation 4s infinite;
  @keyframes upAnimation{
    0%{
      transform: translateY(10px);
    }
    50%{
      transform: translateY(-10px);
    }
    100%{
      transform: translateY(10px);
    }
  }
`
const MoonLightDiv=styled.div<{clicked:string}>`
  border-radius:100%;
  width:70px;
  height:70px;
  background:radial-gradient(rgba(255,255,255,0.01),rgba(255,255,255,0.9));
  position:absolute;
  width:70px;
  z-index:39;
  height:70px;
  top:20%;
  left:46%;
   transform:${({clicked})=>clicked==="true"?'translateY(-2000px) scale(80%)':'none'};
  transition:3s;
  animation:upAnimation 4s infinite;
`

const StyledH1=styled.h1<{clicked:string}>`
animation:upAnimation 4s infinite;

`
const Home: NextPage = () => {
  const [clicked,setClicked]=useState("false");
  const Wave1=useMemo(()=><PageWaveCover1 clicked={clicked}></PageWaveCover1>,[clicked]);
  const Wave2=useMemo(()=><PageWaveCover2 clicked={clicked}></PageWaveCover2>,[clicked]);
  const Wave3=useMemo(()=><PageWaveCover3 clicked={clicked}></PageWaveCover3>,[clicked]);
  const Moon=useMemo(()=><><MoonDiv clicked={clicked}></MoonDiv><MoonLightDiv clicked={clicked}></MoonLightDiv> <StyledH1 clicked={clicked} >title</StyledH1></>,[clicked]);
  const Login=useMemo(()=><LoginModal></LoginModal>,[clicked]);
  return (
    <StyledBodyContainer>
      <FlexContainer direction="row"  align="between">
      <HomeDiv onClick={function(){setClicked("true")}}>
            {Moon}
            {Wave1}
          
            {Wave3}
            {Wave2}
            {clicked==="true"?Login:null}
        </HomeDiv>
      </FlexContainer>
      <FlexContainer direction="row"  align="between">
            <SlideMenu></SlideMenu>
            <Main>
              
            </Main>
            
        </FlexContainer>
      <Footer/> 
      </StyledBodyContainer>
  )
}

export default Home
