import React, { useState, memo } from "react";
import { Menu } from 'antd';
import type { MenuProps } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import IconFont from "../icon";
import { NavLink as Link, useLocation } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

const { SubMenu } = Menu;

/**
 * @description 获取 menuitem
 **/
const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

/**
 * @description 菜单接口
 **/
interface IMenuItem {
  key: string,
  icon: string,
  children: IMenuItem[],
  label: string,
  type: string,
}

const routeMap: Record<string, any> = {}
const getMenuList = (menuList: any[]) => {
  const tempMenuList: ItemType[] = []
  const openKeys: string[] = []
  const getList = (list: any, newList: MenuItem[]) => {
    for (let i = 0; i < list.length; i++) {
      // 获取菜单数据的 path, title, icon
      const { key, path, meta: { title, icon } } = list[i] || {}
      const tempBo = list[i].children && list[i].children.length
      const it = getItem(tempBo ? title : <Link to={path}>{title}</Link>, path, icon && <IconFont icon={icon}></IconFont>);
      newList.push(it)
      // 通过openKeys在递归的时候push相应的菜单项，用于展开子菜单
      openKeys.push(path)
      // 用于将路径对应名称，可用于面包屑
      routeMap[path] = title
      if (tempBo) {
        // 递归处理子节点
        const tempItem = newList[i] as IMenuItem
        tempItem.children = [];
        getList(list[i].children || [], tempItem.children);
      }
    }
  }

  getList(menuList, tempMenuList)
  return { openKeys, tempMenuList }
}

const DynamicMenu = ({ menuData }: any) => {
  // 获取页面加载 path
  const path = useLocation().pathname === '/' ? menuData[0].path : useLocation().pathname
  // 设置默认菜单打开
  const [tempPath, setTempPath] = useState(path)
  const { openKeys, tempMenuList } = getMenuList(menuData)
  const onClick: MenuProps['onClick'] = (e) => {
    setTempPath(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[tempPath]}
      defaultOpenKeys={openKeys}
      items={tempMenuList}
    ></Menu>
  );
};

export default memo(DynamicMenu);
