import React from 'react'
import { Route, Outlet, Navigate } from 'react-router-dom';
import { IMenuType } from '@/config/menu.type';
import { IRouterType } from '@/config/router.type';
// 根据菜单数据生成动态路由
const generateRoutesFromMenu = (menuData: IMenuType[]) => {
  // 要处理重定向问题
  const routes: IRouterType[] = []
  return menuData.map((menu) => {
    let element = null
    if (menu.component === 'layout') {
      element = <Outlet />
    } else if (menu.component) {
      const Ele = React.lazy(() => import(`@/pages${menu.path}`))
      element = <Ele />
    } else {
      // 匹配不到重定向问题
      element = <Navigate to='/home' replace={true} />
    }

    const route = (
      <Route
        key={menu.key}
        path={menu.path}
        element={element}
      >
        {menu.children && menu.children.length && generateRoutesFromMenu(menu.children)}
      </Route>
    );

    return route;
  })
}


const DynamicRoutes = (dynamicMenuData: IMenuType[]) => {
  const routes = generateRoutesFromMenu(dynamicMenuData);
  return routes;
}

export default DynamicRoutes

