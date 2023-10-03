import React from 'react';
import { Route, useRoutes } from 'react-router';
const About = React.lazy(() => import('@/pages/about'));
const Home = React.lazy(() => import('@/pages/home'));

// 静态路由在这里配置
const staticRouter = [
  {
    path: '/',
    key: 'home',
    element: <Home />
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
  return staticRouter.map((item: any) => (
    <Route
      key={item.key}
      path={item.path}
      element={item.element}
    >
      {item.children && item.children.length && useRoutes(item.children)}
    </Route>
  ));
}