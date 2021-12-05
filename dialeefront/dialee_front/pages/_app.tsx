import  '../styles/global.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import axios from 'axios'
import { RecoilRoot,useRecoilState} from 'recoil';
import {basicTheme, retroTheme,springTheme,summerTheme,fallTheme,winterTheme} from '../styles/theme';
import Head from 'next/head'
import {CookiesProvider} from 'react-cookie'
import FlexContainer from '../components/atoms/flexcontainer'
import MainLoading from '../components/molecures/mainloading'
import StyledBodyContainer from '../components/organisms/Body'
import { Cookies } from "react-cookie";
import { sendRefresh } from '../lib/axios';
import Router from 'next/router'
import { useState,useEffect } from 'react';
import useCookie from '../lib/hooks/useCookie';
import NoticeModal from '../components/organisms/noticemodal';
import useLogin from '../lib/hooks/useLogin';
import router from 'next/router';
const axiosApiInstance = axios.create();
axiosApiInstance.interceptors.request.use(async config => {
    return config;
  },
  error => {
    Promise.reject(error)
});
 
axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function async(error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const res=await sendRefresh();
    if(res.data.status===true)
      return axios(originalRequest);
    if(res.data.status===false)
      return Router.push("/");
  }
  return Promise.reject(error);
});


axios.defaults.withCredentials = true;
axios.defaults.timeout=3000;


function MyApp({ Component, pageProps }: AppProps) {
  const [themeState,setThemeState]=useState(retroTheme);
  const {autoLogin}=useLogin();
  const [isNotice,setNotice]=useState(false);
  const [message,setMessage]=useState("");
  useEffect(()=>{
    autoLogin().then((value)=>{
      if(value==true)
        Router.push('/main')
      else
      {
        setMessage("로그인해야 됩니다.홈으로 이동합니다.");
        noticeLogin();
      }
    }).catch((err)=>{
      setMessage("에러가 발생했어요. 홈으로 이동합니다.");
    })

  },[]);
  function noticeLogin(){
    if(Router.route!=='/')
      setNotice(true);
    else
      Router.push('/');
  }
  return (<>
  <CookiesProvider>
  <RecoilRoot>
  <Head><link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&family=Nanum+Myeongjo&display=swap" rel="stylesheet"/></Head>
  <ThemeProvider theme={themeState}>
  
  <StyledBodyContainer >
    <FlexContainer direction="row"  align="between">
      <MainLoading />
      {isNotice===true&&<NoticeModal message={message} setNotice={setNotice}/>}
      <Component {...pageProps}  onChangeTheme={setThemeState}/>
    </FlexContainer>
    </StyledBodyContainer>
  </ThemeProvider>
  </RecoilRoot>
  </CookiesProvider>
 </> )

}
export default MyApp
