import React from 'react'
import { Route, Outlet } from 'react-router-dom';
import { IMenuType } from '@/config/menu.type';
import { IRouterType } from '@/config/router.type';
// 根据菜单数据生成动态路由
const generateRoutesFromMenu = (menuData: IMenuType[]) => {
    const routes: IRouterType[] = []
    menuData.forEach((menu) => {
      const Ele = React.lazy(() => import(`@/pages${menu.path}`))
      const element = menu.component === 'layout' ? <Outlet /> : <Ele />
      const route: IRouterType = {
        path: menu.path,
        key: menu.key,
        element: element,
      }
  
      if (menu.children && menu.children.length > 0) {
        route.children = generateRoutesFromMenu(menu.children);
      }
  
      routes.push(route);
    })
    return routes
  }
  

const DynamicRoutes = (dynamicMenuData: IMenuType[]) => {
    const routerData = generateRoutesFromMenu(dynamicMenuData)
    return routerData.map((item: any) => (
        <Route
          key={item.key}
          path={item.path}
          element={item.element}
        >
          {item.children && item.children.length && DynamicRoutes(item.children)}
        </Route>
      ));
  }
  
  export default DynamicRoutes

