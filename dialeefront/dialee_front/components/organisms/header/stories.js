import React from 'react'
import Header from './index'
import { basicTheme, springTheme, winterTheme, fallTheme, summerTheme, retroTheme } from '../../../styles/theme'
import { ThemeProvider } from 'styled-components'

export default {
    component: Header,
    title: "Header",
};

const Template = (theme) => <ThemeProvider theme={theme}><Header ></Header></ThemeProvider>
export const Basic = () => Template(basicTheme)
export const Spring = () => Template(springTheme)

export const Summer = () => Template(summerTheme)
export const Fall = () => Template(fallTheme)
export const Winter = () => Template(winterTheme)
export const Retro = () => Template(retroTheme)