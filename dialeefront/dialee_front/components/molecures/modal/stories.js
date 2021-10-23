import React from 'react'
import Modal from './index'
import { ThemeProvider } from 'styled-components';
import { basicTheme } from '../../../styles/theme';
import Button from '../../atoms/button';
export default {
    component:Modal,
    title:"Modal",
};

 



const Template= (args) =><ThemeProvider theme={basicTheme}> <Modal {...args}>모달 예쩨</Modal></ThemeProvider >
export const Basic =Template.bind({});
Basic.args={
    top:"10%",
    left:"5%", width:"90%",
     height:"80%", title:"mooomo",
     confirmBtn: <Button btn_type="ok">확인</Button>
}
export const IsnotCancle=Template.bind({});
IsnotCancle.args={
    top:"10%",
     left:"5%", width:"90%",
      height:"80%", title:"mooomo",
      confirmBtn:  <Button btn_type="ok">확인</Button>
      ,isCancle:"no",
}

