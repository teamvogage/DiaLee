

import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import Footer from "../components/organisms/footer"
import axios from 'axios'
import { RecoilRoot,useRecoilValue} from 'recoil';
import FlexContainer from '../components/atoms/flexcontainer'
import SlideMenu from '../components/organisms/slidemenu';
import Main from  '../components/templates/Main'
import {BASED_URL} from '../lib/constants'
import {basicTheme, retroTheme,springTheme,summerTheme,fallTheme,winterTheme} from '../styles/theme';
import { useState } from 'react'
import GlobalStyle from '../styles/globalStyle'
import GlobalFont from '../public/fonts/fonts'
import StyledBodyContainer from '../components/templates/Body';

axios.defaults.baseURL = BASED_URL;
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
 

  return (<>
  <RecoilRoot>
  <ThemeProvider theme={springTheme}>
  <Component {...pageProps} />
        
  </ThemeProvider>
  <GlobalStyle/>
  <GlobalFont/>
  </RecoilRoot>
 </> )

}
export default MyApp
