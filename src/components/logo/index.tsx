import React from 'react';
import { Image } from 'antd';
const logoSrc =
  'https://stackblitz.com/files/stackblitz-starters-fcc2gf/github/KenNaNa/react-admin/admin/src/assets/logo.png';

const Logo: React.FC = () => {
  return <Image width={200} src={logoSrc} />;
};

export default Logo;
