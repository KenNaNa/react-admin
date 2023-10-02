import React, { useState, useEffect, memo, Suspense } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import { getMenu } from '@/api/module/user/menu';
import Logo from '../logo';
import DynamicMenu from '../sider';
import DynamicRoutes from '@/router/dynamic.router';
import StaticRoutes from '@/router/static.router';
import { Routes, Route, Navigate, redirect } from 'react-router';
import { getItem } from '@/utils/storage';

const { Header, Sider, Content } = Layout;

const MainApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [dynamicMenuData, setDynamicMenuData] = useState<any[]>([])

  useEffect(() => {
    getMenu().then(res => {
      setDynamicMenuData(res.data as any[])
    })
  }, [])

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo width={!collapsed ? 85 : 50} />
        {dynamicMenuData && dynamicMenuData.length && <DynamicMenu menuData={dynamicMenuData} />}
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '20px 10px',
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Suspense>
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
