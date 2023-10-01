import React from 'react';
import { Button, Result } from 'antd';

const Error500 = () => (
  <Result
    status="500"
    title="500"
    subTitle="对不起，服务发生错误！"
    extra={<Button type="primary">返回首页</Button>}
  />
);

export default Error500;
