import React, { useState, useEffect } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

import { Outlet } from 'react-router-dom';
import Logo from '../logo';
import DynamicMenu from '../../router';
import { getList } from '../../api/modules/list';

const { Header, Sider, Content } = Layout;

const menuData = [
  {
    menuId: '2000000000000001',
    name: 'Json工具',
    component: '/home',
    redirect: '',
    alwaysShow: true,
    hidden: false,
    children: [
      {
        menuId: '2210574586898432',
        name: 'Json校验格式化工具',
        component: '/home/home',
        redirect: '',
        alwaysShow: true,
        hidden: false,
        meta: {
          title: 'Json校验格式化工具',
          icon: '',
          roles: null,
        },
      },
      {
        menuId: '2210574586898433',
        name: 'Json校验格式化工具1',
        component: '/home/home1',
        redirect: '',
        alwaysShow: true,
        hidden: false,
        meta: {
          title: 'Json校验格式化工具',
          icon: '',
          roles: null,
        },
      },
    ],
    meta: {
      title: 'Json工具',
      icon: 'user',
      roles: null,
    },
  },
];

const MainApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    getList().then((res) => {
      console.log('res===>', res);
    });
  }, []);

  //   <Menu
  //   theme="dark"
  //   mode="inline"
  //   defaultSelectedKeys={['1']}
  //   items={[
  //     {
  //       key: '1',
  //       icon: <UserOutlined />,
  //       label: 'nav 1',
  //     },
  //     {
  //       key: '2',
  //       icon: <VideoCameraOutlined />,
  //       label: 'nav 2',
  //     },
  //     {
  //       key: '3',
  //       icon: <UploadOutlined />,
  //       label: 'nav 3',
  //     },
  //   ]}
  // />

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo width={!collapsed ? 85 : 50} />
        <DynamicMenu menuData={menuData} />
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
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainApp;
