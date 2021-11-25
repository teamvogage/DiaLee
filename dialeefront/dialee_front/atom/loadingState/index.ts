import { atom } from 'recoil';

let loadingState= atom({
  key: 'loadingState',
  default: false, 
});

export default loadingState;