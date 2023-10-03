// 判断token是否存在，如果存在正常渲染，如果不存在重定向到登录路由
import React from 'react'
import { getItem } from "@/utils/storage";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from '@/pages/login';
import Register from '@/pages/register';
import Loading from '../loading';


const Auth = ({ children }: any) => {
    const isToken = getItem('token')
    if (isToken) {
        return (
            <>
                {children}
            </>
        )
    } else {
        // 定向到注册登录
        return (
            <React.Fragment>
                <React.Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </React.Suspense>
            </React.Fragment>
        )
    }
}
export default Auth