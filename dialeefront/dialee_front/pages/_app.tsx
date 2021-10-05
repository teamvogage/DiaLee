import '../styles/globals.css'
import { springTheme, summerTheme,fallTheme,winterTheme, basicTheme,} from '../styles/theme'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import Header from '../components/templates/header';
const now=new Date();
let theme=basicTheme;
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
    <ThemeProvider theme={theme}>
      <Header/>
     <Component {...pageProps} />
  </ThemeProvider>
 </> )

}
export default MyApp
