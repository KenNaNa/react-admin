import React from 'react';
import './app.less';
import './assets/style/reset.less';
import MainApp from './components/layout';
import Auth from './components/auth';
export default function App() {
    return (
        <React.Suspense>
            <Auth children={<MainApp />} />
        </React.Suspense>
    )
}
