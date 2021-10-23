import Sbtns from './index';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from '../../../styles/theme';
export default{
    component:Sbtns,
    title:"socialBtns"
}
export const Default=()=><ThemeProvider theme={basicTheme}><Sbtns></Sbtns></ThemeProvider>