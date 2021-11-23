import React from 'react'
import PwdInput from './index'
import { ThemeProvider } from 'styled-components';
import { basicTheme } from '../../../styles/theme';

export default {
    component:PwdInput,
    title:"PwdInput",
};
const Template= (args) =><ThemeProvider theme={basicTheme}> <PwdInput {...args}>모달 예쩨</PwdInput></ThemeProvider >
export const Basic =Template.bind({});
Basic.args={
    text={
        password1:"hi"
    }
}