import React, { useEffect, useState, Suspense } from 'react';
import './app.less';
import './assets/style/reset.less';
import MainApp from './components/layout';
import Auth from './components/auth';
import { getMenu } from '@/api/module/user/menu';
import Loading from './components/loading';
import { getItem } from './utils/storage';
import { useNavigate, useLocation } from 'react-router';
import useStore from './store';
export default function App() {
  const { menuStore } = useStore()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const tempData = getItem('menuData') || `[]`
  const menuData = menuStore.menuData.length ? menuStore.menuData : JSON.parse(tempData)
  useEffect(() => {
    // 判断登录跳转
    const isToken = getItem('token')
    if (!isToken && (pathname !== '/login' && pathname !== '/register')) {
      navigate('/login', { replace: true })
    }
  }, [])

  return (
    <Auth children={<MainApp dynamicMenuData={menuData} />} />
  )
}
