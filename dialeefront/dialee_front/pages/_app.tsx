import '../styles/globals.css'

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

axios.defaults.baseURL = BASED_URL;
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme,setTheme]=useState(springTheme);

  return (<>
  <RecoilRoot>
    <div id="body_container" onContextMenu={function(e){e.preventDefault()}}>
      <div id="desk">
        <ThemeProvider theme={theme}>
          <FlexContainer direction="row"  align="between">
            <SlideMenu></SlideMenu>
           
            <Main>
                <Component {...pageProps} />
            </Main>
            
        </FlexContainer>
      
      </ThemeProvider>
      <Footer/>
     </div>
   
  </div>
  </RecoilRoot>
 </> )

}
export default MyApp
