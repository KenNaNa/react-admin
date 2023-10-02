// 判断token是否存在，如果存在正常渲染，如果不存在重定向到登录路由
import React from 'react'
import { getItem } from "@/utils/storage";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from '@/pages/login';

const Auth = ({ children }: any) => {
    const isToken = getItem('token')
    if (isToken) {
        return (<>{children}</>)
    } else {
        // 定向到登录
        return (
            <div>
                <Navigate to='/login' replace/>
                <Routes>
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        )
    }
}
export default Auth