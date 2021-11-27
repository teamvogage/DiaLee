import type { NextPage } from 'next'
import React, { useState,useMemo, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import LoginModal from '../components/organisms/loginmodal'
import HomeDiv from '../components/atoms/homeDiv'
import Main from '../components/organisms/Main'
import FlexContainer from '../components/atoms/flexcontainer'
import axios from 'axios'
import StyledBodyContainer from '../components/organisms/Body'
import useCookie from '../lib/hooks/useCookie'
import useLogin from "../lib/hooks/useLogin"
import loginState from '../atom/loginState'
import {useRecoilState} from 'recoil'
import MainLoading from '../components/molecures/mainloading'
import { sendRefresh } from '../lib/axios'

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
  const {getCookie,setCookie,removeCookie}=useCookie();
  const [isLogin,setLogin] =useRecoilState(loginState);
  const [clicked,setClicked]=useState(false);
  const {checkLogin,autoLogin}=useLogin();
  useEffect(()=>{
    const auto=getCookie("auto_login")
    checkLogin().then(
      (val)=>
      {
        return  val===true?setLogin(true):auto==="true"?autoLogin():setLogin(false);
      }
    ).catch((err)=>{
       return setLogin(false);
    })

  },[]);
  useEffect(()=>{
    setClicked(isLogin);
  },[isLogin])
 
  const Waves=<WaveDiv clicked={clicked}>
    <PageWaveCover />
    </WaveDiv>;
  const Moon=useMemo(()=><><MoonDiv ></MoonDiv><MoonLightDiv ></MoonLightDiv> <StyledH1  >Voyage</StyledH1></>,[clicked]);
  const Login=useMemo(()=><LoginModal></LoginModal>,[clicked]);
  return (
    <StyledBodyContainer>
      <FlexContainer direction="row" align="between">
       <MainLoading/>
      </FlexContainer>
     
      {isLogin===false&&<FlexContainer direction="row"  align="between">
        <HomeDiv onClick={function(){setClicked(true);}}>
          {Moon}
          {Waves}
          {clicked===true?Login:null}
        </HomeDiv>
      </FlexContainer>}
      <FlexContainer direction="row"  align="between">
     
            <Main>
              
            </Main>
             
        </FlexContainer>
            
      </StyledBodyContainer>
  )
}

export default Home
