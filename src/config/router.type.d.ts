import React from "react"
/**
 * @description 路由类型
 * @param {string} key 唯一 key
 * @param {string} path 路由
 * @param {React.ReactNode} element 虚拟组件
 * @param {IRouterType[]} children 子级信息
 **/ 
export interface IRouterType {
    key: string
    path: string
    element: React.ReactNode
    children?: IRouterType[]
}