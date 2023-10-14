import React from 'react';
import { Route, useRoutes } from 'react-router';
import { Navigate } from 'react-router';
import { IRouterType } from '@/config/router.type';
const About = React.lazy(() => import('@/pages/about'));
const Home = React.lazy(() => import('@/pages/home'));

// 静态路由在这里配置
const staticRouter: IRouterType[] = [
  {
    path: '/*',
    key: 'home',
    element: <Navigate to="/home" replace={true} />
  },
  {
    path: '/home',
    key: 'home',
    element: <Home />,
  },
  {
    path: '/about',
    key: 'about',
    element: <About />,
  },
];


export default function StaticRoutes() {
  return staticRouter.map((item: IRouterType) => (
    <Route
      key={item.key}
      path={item.path}
      element={item.element}
    >
      {item.children && item.children.length && useRoutes(item.children)}
    </Route>
  ));
}