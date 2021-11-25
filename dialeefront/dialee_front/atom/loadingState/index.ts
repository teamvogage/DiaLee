import { atom } from 'recoil';

let loadingState= atom({
  key: 'loginState',
  default: false, 
});

export default loadingState;