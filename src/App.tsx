import React, { useEffect, useState, Suspense } from 'react';
import './app.less';
import './assets/style/reset.less';
import MainApp from './components/layout';
import Auth from './components/auth';
import { getMenu } from '@/api/module/user/menu';
import Loading from './components/loading';
import { getItem } from './utils/storage';
import { useNavigate, useLocation } from 'react-router';
export default function App() {
  const [dynamicMenuData, setDynamicMenuData] = useState<any[]>([])
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isToken = getItem('token')
  if(!isToken && pathname !== '/login') {
    useEffect(() => {
      navigate('/login', { replace: true })
    }, [])
  }
  useEffect(() => {
    getMenu().then(res => {
      setDynamicMenuData(res.data as any[])
    })
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      {
        dynamicMenuData && dynamicMenuData.length
          ?
          <Auth children={<MainApp dynamicMenuData={dynamicMenuData} />} />
          : <Loading />
      }
    </Suspense>
  )
}
