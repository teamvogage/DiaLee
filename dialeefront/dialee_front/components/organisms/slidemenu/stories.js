import React from 'react'
import SliderMenu from './index'
import {basicTheme,springTheme,winterTheme,fallTheme,summerTheme,retroTheme} from '../../../styles/theme'
import {ThemeProvider} from 'styled-components'
import { RecoilRoot } from 'recoil'
export default {
    component:SliderMenu,
    title:"SliderMenu",
};
const Template=(theme)=><RecoilRoot><ThemeProvider theme={theme}><SliderMenu ></SliderMenu></ThemeProvider></RecoilRoot>
export const Basic =()=>Template(basicTheme)
export const Spring=()=>Template(springTheme)

export const Summer=()=>Template(summerTheme)
export const Fall=()=>Template(fallTheme)
export const Winter=()=>Template(winterTheme)
export const Retro=()=>Template(retroTheme)