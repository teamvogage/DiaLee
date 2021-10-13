import React from 'react';
import {ThemeProvider} from 'styled-components'
import Button from '../../atoms/button';
import ButtonList from './index'
import {basicTheme,springTheme,summerTheme,fallTheme,winterTheme,retroTheme} from '../../../styles/theme'

export default {
  component: ButtonList,
  title: 'ButtonList',
};
const Template= (args) =>{return <ThemeProvider theme={args.theme}> 
                              <ButtonList {...args}>
                                  <Button align="between" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu0">
                                메뉴
                                </Button>  
                                <Button align="between" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu1">
                                메뉴
                                </Button>  
                                <Button align="between" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu2">
                                메뉴
                                </Button>  
                                <Button align="between" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu3">
                                메뉴
                                </Button> 
                                <Button align="between" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu4">
                                메뉴
                                </Button> 
                              </ButtonList>
                          </ThemeProvider >}
export const Menu_basic=Template.bind({});
Menu_basic.args={
  listType:'slideMenu',
  theme:basicTheme,
}