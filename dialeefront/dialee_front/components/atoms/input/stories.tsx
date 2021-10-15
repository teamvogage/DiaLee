import React from 'react';
import Input,{IinputProps} from './index';
export default {
  title: 'Input',
  component: Input,
};
const Template=(args:IinputProps)=><Input {...args}></Input>
export const Default=Template.bind({});
Default.args={
  size:15,
    auto:'yes',
    maxlength:8,
    value:'login',
    type:'text',
    placeholder:'login',
  
}
