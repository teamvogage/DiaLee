import React from 'react'
import Footer from './index'
import {basicTheme,springTheme,winterTheme,fallTheme,summerTheme,retroTheme} from '../../../styles/theme'
import {ThemeProvider} from 'styled-components'

export default {
    component:Footer,
    title:"Footer",
};

const Template=(theme)=><ThemeProvider theme={theme}><Footer ></Footer></ThemeProvider>
export const Basic =()=>Template(basicTheme)
export const Spring=()=>Template(springTheme)

export const Summer=()=>Template(summerTheme)
export const Fall=()=>Template(fallTheme)
export const Winter=()=>Template(winterTheme)
export const Retro=()=>Template(retroTheme)