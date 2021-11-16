import { atom } from 'recoil';

let loginState= atom({
  key: 'loginState',
  default: 0, 
});

export default loginState;