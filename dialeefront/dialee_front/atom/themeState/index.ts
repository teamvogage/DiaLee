import { atom } from 'recoil';

let themeState= atom({
  key: 'themeState',
  default: 0, 
});

export default themeState;