import React from 'react'
import Header from './index'
import {basicTheme,springTheme,winterTheme,fallTheme,summerTheme,retroTheme} from '../../../styles/theme'
import {ThemeProvider} from 'styled-components'

export default {
    component:Header,
    title:"Header",
};

export const Default=()=><ThemeProvider theme={basicTheme}><Header></Header></ThemeProvider>
export const Spring=()=><ThemeProvider theme={springTheme}><Header></Header></ThemeProvider>
export const Summer=()=><ThemeProvider theme={summerTheme}><Header ></Header></ThemeProvider>
export const Fall=()=><ThemeProvider theme={fallTheme}><Header ></Header></ThemeProvider>
export const Winter=()=><ThemeProvider theme={winterTheme}><Header></Header></ThemeProvider>
export const Retro=()=><ThemeProvider theme={retroTheme}><Header></Header></ThemeProvider>