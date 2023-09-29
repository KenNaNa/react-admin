import React from 'react';
import { Image } from 'antd';
import logoSrc from '../../assets/imgs/logo.png';

const Logo: React.FC = () => {
  return <Image width={200} src={logoSrc} />;
};

export default Logo;
