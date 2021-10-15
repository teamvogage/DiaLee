import '../styles/globals.css'
import { springTheme, summerTheme,fallTheme,winterTheme, basicTheme,retroTheme} from '../styles/theme'
import type { AppProps } from 'next/app'
import styled,{ThemeProvider} from 'styled-components'
import Footer from "../components/organisms/footer"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import FlexContainer from '../components/atoms/flexcontainer'
import SlideMenu from '../components/organisms/slidemenu';
import Main from  '../components/templates/Main'
const now=new Date();
let theme=retroTheme;
if(now.getMonth()===11)
  theme=winterTheme;
else if(now.getMonth()===6)
  theme=summerTheme;
else if(now.getMonth()===8){
  theme=fallTheme;
}else if(now.getMonth()===2){
  theme=springTheme;
}

function MyApp({ Component, pageProps }: AppProps) {
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
