import React from 'react'
import Footer from './index'
import {basicTheme,springTheme,winterTheme,fallTheme,summerTheme,retroTheme} from '../../../styles/theme'
import {ThemeProvider} from 'styled-components'

export default {
    component:Footer,
    title:"Footer",
};

export const Default=()=><ThemeProvider theme={basicTheme}><Footer></Footer></ThemeProvider>
export const Spring=()=><ThemeProvider theme={springTheme}><Footer></Footer></ThemeProvider>
export const Summer=()=><ThemeProvider theme={summerTheme}><Footer ></Footer></ThemeProvider>
export const Fall=()=><ThemeProvider theme={fallTheme}><Footer ></Footer></ThemeProvider>
export const Winter=()=><ThemeProvider theme={winterTheme}><Footer></Footer></ThemeProvider>
export const Retro=()=><ThemeProvider theme={retroTheme}><Footer></Footer></ThemeProvider>