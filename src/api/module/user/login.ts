import request from "@/api/request";

import { IData, IApiResponse } from '../types';

/**
 * @description 登录的参数
 * @param {string} username 用户名
 * @param {string} password 登录密码
 **/
export interface IGoLoginParams {
    username: string
    password: string
}

/**
 * @description 登录
 * @param {string} username 用户名
 * @param {string} password 登录密码
 **/
export const toLogin = ({ username, password }: IGoLoginParams): Promise<IApiResponse<IData>> => {
    return request.post('/login', { username, password })
}


/**
 * @description 退出登录
 * @param {string} username 用户名
 * @param {string} password 登录密码
 **/
export const toLogout = (): Promise<IApiResponse<IData>> => {
    return request.post('/logout')
}

/**
 * @description 用户注册
 * @param {string} username 用户名
 * @param {string} password 登录密码
 **/
export const toRegister = ({ username, password }: IGoLoginParams): Promise<IApiResponse<IData>> => {
    return request.post('/register', { username, password })
}