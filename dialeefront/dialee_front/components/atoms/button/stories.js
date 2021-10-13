import React from 'react';
import {ThemeProvider} from 'styled-components'
import Button from './index';
import {basicTheme,springTheme,summerTheme,fallTheme,winterTheme,retroTheme} from '../../../styles/theme'

export default {
  component: Button,
  title: 'Button',
};

const Template= (args) =><ThemeProvider theme={args.theme}> <Button {...args}>스티커 모음</Button></ThemeProvider >

export const Menu_basic=Template.bind({});
Menu_basic.args={
  width:null,
  height:null,
  btn_type:'subMenu2',
  prefix:"/imoticon/Heart.png",
  suffix:"/imoticon/Star.png",
  theme:basicTheme,
}
export const Menu_Spring=Template.bind({});
Menu_Spring.args={
  ...Menu_basic.args,
 theme:springTheme,
 prefix:"/imoticon/Cherry.png"
}
export const Menu_Summer=Template.bind({});
Menu_Summer.args={
  ...Menu_basic.args,
  prefix:"/imoticon/Tube.png",
  theme:summerTheme,

}
export const Menu_Fall=Template.bind({});
Menu_Fall.args={
  ...Menu_basic.args,
  prefix:"/imoticon/SunFlower.png",
  theme:fallTheme,
}
export const Menu_Winter=Template.bind({});
Menu_Winter.args={
  ...Menu_basic.args,
  prefix:"/imoticon/Gift.png",
  theme:winterTheme,
}
export const Menu_Retro=Template.bind({});
Menu_Retro.args={
  ...Menu_basic.args,
  theme:retroTheme,
  prefix:"/imoticon/Retro.png"
}
export const Primary_Button=Template.bind({});
Primary_Button.args={
  
  ...Menu_basic.args,
  btn_type:'primary',
  theme:basicTheme,
  prefix:null,
  suffix:null,
}
export const Secondary_Button=Template.bind({});
Secondary_Button.args={
  
  ...Primary_Button.args,
  btn_type:'secondary',
  prefix:null,
  suffix:null,
  
}
export const Cancle_Button=Template.bind({});
Cancle_Button.args={
  
  ...Primary_Button.args,
  align:"center",
  btn_type:'cancle',
  prefix:null,
  suffix:null,
}
export const Book_Button=Template.bind({});
Book_Button.args={
  ...Primary_Button,
  align:"center",
  btn_type:"book",
  prefix:null,
  suffix:null,
  theme:basicTheme,
}
