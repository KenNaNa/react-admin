import React from 'react';
import { Image } from 'antd';
import './index.css';
const logoSrc =
  'https://github.com/toomejs/toome/blob/main/src/assets/images/logo.png?raw=true';

const Logo = ({ width }: { width: number }) => {
  return (
    <div id='logoImage' className="logo">
      <Image preview={false} width={width} src={logoSrc} />
    </div>
  );
};

export default Logo;
