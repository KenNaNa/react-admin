import React from 'react'
import { Route, Outlet } from 'react-router-dom';
import { IMenuType } from '@/config/menu.type';
import { IRouterType } from '@/config/router.type';
// 根据菜单数据生成动态路由
const generateRoutesFromMenu = (menuData: IMenuType[]) => {
  // 要处理重定向问题
  const routes: IRouterType[] = []
  menuData.forEach((menu) => {
    let element = null
    if (menu.component === 'layout') {
      element = <Outlet />
    } else {
      console.log('menu.path===>', menu.path)
      try {
        const Ele = React.lazy(() => import(`@/pages${menu.path}`))
        element = <Ele />
      } catch (error) {
        console.log('error===>', error)
      }
      
    }

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
  console.log('routes====>', routes)
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

