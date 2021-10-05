import React from 'react';
import {ThemeProvider} from 'styled-components'
import Button from './index';
import {basicTheme,springTheme,summerTheme,fallTheme,winterTheme} from '../../../styles/theme'


export default {
  component: Button,
  title: 'Button',
};

export const Menu_basic=()=><ThemeProvider theme={basicTheme}><Button width="100px" height="100px" btn_type="menu">하이</Button></ThemeProvider>
export const Menu_Spring=()=><ThemeProvider theme={springTheme}><Button btn_type="menu">하이</Button></ThemeProvider>
export const Menu_Summer=()=><ThemeProvider theme={summerTheme}><Button btn_type="menu">하이</Button></ThemeProvider>
export const Menu_Fall=()=><ThemeProvider theme={fallTheme}><Button btn_type="menu">하이</Button></ThemeProvider>
export const Menu_Winter=()=><ThemeProvider theme={winterTheme}><Button btn_type="menu">하이</Button></ThemeProvider>

export const Select=()=><ThemeProvider theme={basicTheme}><Button btn_type="select">하이</Button></ThemeProvider>
export const Select_Spring=()=><ThemeProvider theme={springTheme}><Button btn_type="select">하이</Button></ThemeProvider>
export const Select_Summer=()=><ThemeProvider theme={summerTheme}><Button btn_type="select">하이</Button></ThemeProvider>
export const Select_Fall=()=><ThemeProvider theme={fallTheme}><Button btn_type="select">하이</Button></ThemeProvider>
export const Select_Winter=()=><ThemeProvider theme={winterTheme}><Button btn_type="select">하이</Button></ThemeProvider>