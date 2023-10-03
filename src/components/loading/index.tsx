import React from 'react';
import { Spin } from 'antd';

const Loading: React.FC = () => (
    <Spin tip='加载中。。。' style={{
        backgroundColor: 'rgba(0,0,0,0.05)',    //修改Spin原来的背景颜色
        minHeight: '100vh',                     //使其为整个页面高度
        width: '100vw',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }} />

);

export default Loading;