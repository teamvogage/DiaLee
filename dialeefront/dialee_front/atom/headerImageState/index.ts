import { atom} from 'recoil';

let headerImageState= atom({
  key: 'headerImageState',
  default: 0, 
});

export default headerImageState;