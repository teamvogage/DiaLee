import { atom } from 'recoil';

let disabledMainState= atom({
  key: 'disabledMainState',
  default: false, 
});

export default disabledMainState;