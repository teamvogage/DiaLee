import LoginModal from './index';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from '../../../styles/theme';
export default{
    component:LoginModal,
    title:"LoginModal"
}
export const Basic=()=><ThemeProvider theme={basicTheme}><LoginModal></LoginModal></ThemeProvider>