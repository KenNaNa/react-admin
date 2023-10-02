import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const DynamicMenu = ({ menuData }: any) => {
  return (
    <Menu theme="dark" mode="inline">
      {menuData.map((menuItem: any) => (
        <React.Fragment key={menuItem.menuId}>
          {menuItem.children && menuItem.children.length > 0 ? (
            <SubMenu key={menuItem.menuId} title={menuItem.meta.title}>
              <DynamicMenu menuData={menuItem.children} />
            </SubMenu>
          ) : (
            <Menu.Item key={menuItem.menuId}>
              <Link to={menuItem.component}>{menuItem.meta.title}</Link>
            </Menu.Item>
          )}
        </React.Fragment>
      ))}
    </Menu>
  );
};

export default DynamicMenu;
