import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'
import LoginModal from '../components/organisms/loginmodal'
import AnimatedDiv from '../components/atoms/animatedDiv'
const PageWaveCover1=styled.div<{clicked:string}>`
height:${({clicked})=>clicked==="true"?'300vh':'200vw'};
  width:${({clicked})=>clicked==="true"?'300vh':'200vw'};
  position:absolute;
  left:${({clicked})=>clicked==="true"?'-70%':'-60%;'};
  top:${({clicked})=>clicked==="true"?'-60%':'70%'};
  background: linear-gradient(#590995 ,#03C4A1);
  border:2px #590995 solid;
  max-width: 1700px;
  max-height:1700px;
  transform-origin: 50% 48%;
  border-radius: 39%;
  animation:wave2  30s linear infinite;
  @keyframes wave2{
    0% {left:-120%;  transform: rotate(0deg); }
    25%{left:-100%;   transform: rotate(180deg);}
    50% {left:-120%; transform:  rotate(360deg) ; }
    75% {left:-100%; transform:  rotate(540deg) ; }
    100%{left:-120%; transform:  rotate(720deg) ;}
  };
  transition:4s;
  
`
const PageWaveCover2=styled.div<{clicked:string}>`
 
  height:${({clicked})=>clicked==="true"?'300vh':'200vw'};
  width:${({clicked})=>clicked==="true"?'300vh':'200vw'};
  position:absolute;
  left:${({clicked})=>clicked==="true"?'-70%':'-50%;'};
  top:${({clicked})=>clicked==="true"?'-60%':'70%'};
  background:${({clicked})=>clicked==="true"?'linear-gradient(#590995 ,#03C4A1);':'linear-gradient(#590995 ,#03C4A1);'}; 
  border:2px #03C4A1 solid;
  max-width: 1700px;
  max-height:1700px;
  transform-origin: 50% 48%;
  border-radius: 39%;
  animation:wave1   30s linear infinite;
  @keyframes wave1{
    0% {left:-40%;  transform: rotate(0deg); }
    25%{left:-50%;   transform: rotate(180deg);}
    50% {left:-40%;transform:  rotate(360deg) ; }
    75% {left:-50%;transform:  rotate(540deg) ; }
    100%{left:-40%; transform:  rotate(720deg) ;}
  };
  transition:4s;
  
`
const PageWaveCover3=styled.div<{clicked:string}>`
 
  height:${({clicked})=>clicked==="true"?'300vh':'200vw'};
  width:${({clicked})=>clicked==="true"?'300vh':'200vw'};
  position:absolute;
  left:${({clicked})=>clicked==="true"?'-70%':'-50%;'};
  top:${({clicked})=>clicked==="true"?'-60%':'70%'};
  background: linear-gradient(#590995 ,#03C4A1);
  border:2px #590995 solid;
  max-width: 1700px;
  max-height:1700px;
  transform-origin: 53% 47%;
  border-radius: 42%;
  animation:wave3   30s linear infinite;
  @keyframes wave3{
    0% {left:-0%;  transform: rotate(0deg); }
    25%{left:-10%;   transform: rotate(180deg);}
    50% {left:-0%;transform:  rotate(360deg) ; }
    75% {left:-10%;transform:  rotate(540deg) ; }
    100%{left:-0%; transform:  rotate(720deg) ;}
  };
  transition:4s;
  
`
const HomeDiv=styled.div`
    z-index: 3000;
    width:100%;
    margin-left:27px;
    position: absolute;
    overflow: hidden;
    left:0;
    height: 100vh;
    display:flex;
    color:white;
    flex-direction:column;
    font-size:30px;
    justify-content:center;
    align-contents:flex-end;
    align-items:center;
    background: linear-gradient(black,#590995 );
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
`
const Home: NextPage = () => {
  const [clicked,setClicked]=useState("false");

  return (
        <HomeDiv onClick={function(){setClicked("true")}}>
            <MoonDiv clicked={clicked}/>
            <MoonLightDiv clicked={clicked}/>
            <PageWaveCover3 clicked={clicked}/>
            <PageWaveCover1 clicked={clicked}/>
            <PageWaveCover2 clicked={clicked} />
            {clicked==="true"?<LoginModal />:null}
            <h1>title</h1>
        </HomeDiv>
  )
}

export default Home
