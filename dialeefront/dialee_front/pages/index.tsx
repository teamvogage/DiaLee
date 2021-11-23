import type { NextPage } from 'next'
import React, { useState,useMemo, useCallback } from 'react'
import styled from 'styled-components'
import LoginModal from '../components/organisms/loginmodal'
import HomeDiv from '../components/atoms/homeDiv'
import SlideMenu from '../components/organisms/slidemenu'
import Main from '../components/organisms/Main'
import FlexContainer from '../components/atoms/flexcontainer'
import Footer from '../components/organisms/footer'
import AnimatedDiv from '../components/atoms/animatedDiv'
import Image from '../components/atoms/image'
import StyledBodyContainer from '../components/organisms/Body'
import MobileKeyBoard from '../components/atoms/mobileKeyboard'

let PageWaveCover=styled.div<{clicked:string}>`

height:1600px;
width:1600px;

  background:linear-gradient(#590995 ,#03C4A1);
  border:2px white solid;
  
  transform-origin: 52% 48%;
  border-radius: 39%;
  animation:wave1 30s linear infinite;
  @keyframes wave1{
    0% { transform: rotate(0deg); }
    25%{  transform: rotate(180deg);}
    50% {transform:  rotate(360deg) ; }
    75% {transform:  rotate(540deg) ; }
    100%{ transform:  rotate(720deg) ;}
  };
  
  
`

const WaveDiv=styled.div<{clicked:string}>`
will-change: top height; 
top:${({clicked})=>clicked==="true"?'-60%':'70%'};
position:absolute;
transition:top 4s;

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
  animation:upAnimation 4s infinite;
`

const StyledH1=styled.h1<{clicked:string}>`
animation:upAnimation 4s infinite;

`
const Home: NextPage = () => {
  const [clicked,setClicked]=useState("false");
  const Waves=useMemo(()=><WaveDiv clicked={clicked}>
    <PageWaveCover clicked={clicked}/>
    </WaveDiv>,[clicked]);
  const Moon=useMemo(()=><><MoonDiv clicked={clicked}></MoonDiv><MoonLightDiv clicked={clicked}></MoonLightDiv> <StyledH1 clicked={clicked} >Voyage</StyledH1></>,[clicked]);
  const Login=useMemo(()=><LoginModal></LoginModal>,[clicked]);
  return (
    <StyledBodyContainer>
    
      <FlexContainer direction="row"  align="between">
      <HomeDiv onClick={function(){setClicked("true")}}>
            {Moon}
            {Waves}
            {clicked==="true"?Login:null}
           
        </HomeDiv>
      </FlexContainer>
      <FlexContainer direction="row"  align="between">
            <Main>
              
            </Main>
        </FlexContainer>
      <Footer/> 
      <MobileKeyBoard/>
      </StyledBodyContainer>
  )
}

export default Home
