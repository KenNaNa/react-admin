import React from 'react';
import './app.less';
import './assets/style/reset.less';
import MainApp from './components/layout';
export default function App() {
    return (
        <React.Suspense>
            <MainApp />
        </React.Suspense>
    )
}
