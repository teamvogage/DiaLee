import React from 'react';
import Input,{IinputProps} from './index';
export default {
  title: 'Input',
  component: Input,
};
const defaultprops={
  size:15,
  auto:"autofocus",
  maxlength:30,
  value:"하이",
  type:"text",
  placeholder:"플홀",
}
export const Default=()=>{
 return <Input {...defaultprops}></Input>
}
