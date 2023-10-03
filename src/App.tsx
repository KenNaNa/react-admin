import React, {useEffect, useState} from 'react';
import './app.less';
import './assets/style/reset.less';
import MainApp from './components/layout';
import Auth from './components/auth';
import { getMenu } from '@/api/module/user/menu';
export default function App() {
    const [dynamicMenuData, setDynamicMenuData] = useState<any[]>([])

    useEffect(() => {
      getMenu().then(res => {
        setDynamicMenuData(res.data as any[])
      })
    }, [])

    return (
        <>
            <Auth children={<MainApp dynamicMenuData={dynamicMenuData} />} />
        </>
    )
}
