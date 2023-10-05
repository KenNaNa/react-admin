import React, { useState, Suspense } from 'react';
import { Layout, theme } from 'antd';
import Logo from '../logo';
import DynamicMenu from '../sider';
import DynamicRoutes from '@/router/dynamic.router';
import StaticRoutes from '@/router/static.router';
import { Routes, Route, Navigate } from 'react-router';
import TopHeader from '../header';
import Loading from '../loading';
const { Sider, Content } = Layout;

const MainApp = ({ dynamicMenuData }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo width={!collapsed ? 85 : 50} />
        {dynamicMenuData && dynamicMenuData.length && <DynamicMenu menuData={dynamicMenuData} />}
      </Sider>
      <Layout>
        <TopHeader colorBgContainer={colorBgContainer} collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '10px 10px',
            minHeight: 280,
            background: '#f5f5f5',
          }}
        >
          <Suspense fallback={<Loading />}>
            <Routes>
              {StaticRoutes()}
              {dynamicMenuData && dynamicMenuData[0] && dynamicMenuData[0].path && <Route path="/" element={<Navigate to={dynamicMenuData[0].path} />} />}
              {dynamicMenuData && dynamicMenuData.length && DynamicRoutes(dynamicMenuData)}
            </Routes>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainApp;
