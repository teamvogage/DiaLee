import { atom } from 'recoil';

let loginState= atom({
  key: 'loginState',
  default: false, 
});

export default loginState;