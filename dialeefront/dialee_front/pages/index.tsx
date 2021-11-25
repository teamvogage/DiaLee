import type { NextPage } from 'next'
import React, { useState,useMemo, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import LoginModal from '../components/organisms/loginmodal'
import HomeDiv from '../components/atoms/homeDiv'
import Main from '../components/organisms/Main'
import FlexContainer from '../components/atoms/flexcontainer'
import Footer from '../components/organisms/footer'
import StyledBodyContainer from '../components/organisms/Body'

import loginState from '../atom/loginState'
import {useRecoilValue} from 'recoil'
import MainLoading from '../components/molecures/mainloading'

let PageWaveCover=styled.div`

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

const WaveDiv=styled.div<{clicked:boolean}>`
will-change: top height; 
top:${({clicked})=>clicked===true?'-60%':'70%'};
position:absolute;
transition:top 4s;

`
const MoonDiv=styled.div`
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
const MoonLightDiv=styled.div`
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

const StyledH1=styled.h1`
animation:upAnimation 4s infinite;

`
const Home: NextPage = () => {
  
  const isLogin =useRecoilValue(loginState);
  const [clicked,setClicked]=useState(false);
  useEffect(()=>{
    if(isLogin===false)
      setClicked(false);
  },[isLogin]);
  const Waves=useMemo(()=><WaveDiv clicked={clicked}>
    <PageWaveCover onClick={function(){setClicked(true)}}/>
    </WaveDiv>,[clicked]);
  const Moon=useMemo(()=><><MoonDiv ></MoonDiv><MoonLightDiv ></MoonLightDiv> <StyledH1  >Voyage</StyledH1></>,[clicked]);
  const Login=useMemo(()=><LoginModal></LoginModal>,[clicked]);
  return (
    <StyledBodyContainer>
      <MainLoading/>
      {isLogin===false&&<FlexContainer direction="row"  align="between">
        <HomeDiv >
            {Moon}
            {Waves}
            {clicked===true?Login:null}
        </HomeDiv>
      </FlexContainer>}
      <FlexContainer direction="row"  align="between">
            <Main>
              
            </Main>
        </FlexContainer>
      <Footer/> 

      </StyledBodyContainer>
  )
}

export default Home
