
import React from 'react';

import Image from './index';
import testImage from '../../../public/createBtn.png'
export default {
  title: 'Image',
  component: Image,
};
export const Images=()=><Image src={testImage} layout="fill"></Image>
