import React from 'react';
import { Outlet } from 'react-router';
const About = React.lazy(() => import('@/pages/about'));
const Home = React.lazy(() => import('@/pages/home'));
const Login = React.lazy(() => import('@/pages/login'));

const staticRouter = [
  {
    path: '/pages',
    element: <Outlet />,
    children: [
      {
        path: '/pages/home',
        element: <Home />
      }
    ]
  },
  {
    path: '/pages',
    element: <Outlet />,
    children: [
      {
        path: '/pages/about',
        element: <About />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
];

export default staticRouter