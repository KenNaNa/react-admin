import React from 'react';
import { Button, Result } from 'antd';

const Error403 = () => (
  <Result
    status="403"
    title="403"
    subTitle="对不起，您没有权限访问此页面！"
    extra={<Button type="primary">返回首页</Button>}
  />
);

export default Error403;
