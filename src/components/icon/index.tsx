import * as Icons from '@ant-design/icons';// 导入所有icon
import React from 'react';

const IconFont = (props: {icon: string}) => {
  const { icon } = props
  const antIcon: { [key: string]: any } = Icons
  return React.createElement(antIcon[icon]) // 按名称匹配创建dom
}

export default IconFont