// 判断token是否存在，如果存在正常渲染，如果不存在重定向到登录路由
import React from 'react'
import { getItem } from "@/utils/storage";
import { Navigate } from "react-router-dom";

const Auth = ({ children }: any) => {
    const isToken = getItem('token')
    if (isToken) {
        return (<>{children}</>)
    } else {
        return <Navigate to='/login' replace />
    }
}
export default Auth