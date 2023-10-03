import request from '@/api/request/index';
import { IData, IApiResponse } from '../types';

/**
 * @description 获取动态菜单
 **/
export const getMenu = (): Promise<IApiResponse<IData>> => {
    return request.get('/menu')
}