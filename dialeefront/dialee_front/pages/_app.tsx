import  '../styles/global.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import axios from 'axios'
import { RecoilRoot} from 'recoil';
import {basicTheme, retroTheme,springTheme,summerTheme,fallTheme,winterTheme} from '../styles/theme';
import Head from 'next/head'
import {CookiesProvider} from 'react-cookie'
import FlexContainer from '../components/atoms/flexcontainer'
import MainLoading from '../components/molecures/mainloading'
import StyledBodyContainer from '../components/organisms/Body'
import { Cookies } from "react-cookie";
import { sendRefresh } from '../lib/axios';
import Router from 'next/router'
const axiosApiInstance = axios.create();
axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function async(error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    const cookie=new Cookies();
    originalRequest._retry = true;
    const refreshToken=cookie.get("refresh_token");
    if(!refreshToken)
      return Router.push("/");
    const res=await sendRefresh(refreshToken);
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


  return (<>
  <CookiesProvider>
  <RecoilRoot>
  <Head><link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&family=Nanum+Myeongjo&display=swap" rel="stylesheet"/></Head>
    
  <ThemeProvider theme={springTheme}>
  
  <StyledBodyContainer >
    <FlexContainer direction="row"  align="between">
      <MainLoading/>
      <Component {...pageProps} />
    </FlexContainer>
    </StyledBodyContainer>
  </ThemeProvider>
  </RecoilRoot>
  </CookiesProvider>
 </> )

}
export default MyApp
