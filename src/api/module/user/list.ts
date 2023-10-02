import React from 'react'
import request from '~/src/api/request/index';
import { IData, IApiResponse } from '../types';

/**
 * @description 获取用户列表
 **/ 
const getUserList = (): Promise<IApiResponse<IData>> => {
  return request.get('/posts');
};

export { getUserList as getList };
