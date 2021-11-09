
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import Footer from "../components/organisms/footer"
import axios from 'axios'
import { RecoilRoot,useRecoilValue} from 'recoil';
import {BASED_URL} from '../lib/constants'
import {basicTheme, retroTheme,springTheme,summerTheme,fallTheme,winterTheme} from '../styles/theme';
import Head from 'next/head'
import GlobalStyle from '../styles/globalStyle'
import '../styles/font.css' 


axios.defaults.baseURL = BASED_URL;
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
 

  return (<>
  <Head>

  </Head>
  <RecoilRoot>
    
  <ThemeProvider theme={springTheme}>
  <Component {...pageProps} />
        
  </ThemeProvider>
  <GlobalStyle/>
  </RecoilRoot>
 </> )

}
export default MyApp
