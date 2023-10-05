import { message } from 'antd';
import axios from 'axios';
import { EErrorCode } from './code';
import { getItem, removeItem } from '@/utils/storage';
const request = axios.create({
  baseURL: '/api', // 替换为你的API基本URL
  timeout: 5000, // 请求超时时间（毫秒）
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在请求发送前可以在这里进行一些处理，例如添加请求头
    config.headers.Authorization = `Bearer ${getItem('token')}`;
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 在这里对响应数据进行处理
    return response.data;
  },
  (error) => {
    // 处理响应错误
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;

      switch (status) {
        case EErrorCode.REQUEST_ERROR:
          message.error('请求错误')
          break
        case EErrorCode.TOKEN_EXPIRED:
          message.error('Token过期，请重新登录').then(() => {
            removeItem('token')
            removeItem('isLogin')
            removeItem('username')
          }).then(() => {
            window.location.href = '/login'
          })
          break
        case EErrorCode.ACCESS_DENY:
          message.error('拒绝访问')
          break
        case EErrorCode.NOT_FOUND:
          message.error(`请求地址出错: ${error.response.config.url}`)
          break
        case EErrorCode.SERVER_INTER_ERROR:
          message.error('服务器内部错误')
          break
        case EErrorCode.SERVICE_NOT_IMPLEMENT:
          message.error('服务未实现')
          break
        case EErrorCode.GATEWAY_ERROR:
          message.error('网关错误')
          break
        case EErrorCode.SERVICE_UNAVAILABLE:
          message.error('服务不可用')
          break
        case EErrorCode.GATEWAY_TIMEOUT:
          message.error('网关超时')
          break
        case EErrorCode.HTTP_NOT_SUPPORT:
          message.error('HTTP版本不受支持')
          break
        default:
          // 处理其他HTTP错误
          console.error('HTTP Error', status, data);
          break
      }
    } else if (error.request) {
      // 如果请求被发出，但没有收到响应
      console.error('No response received', error.request);
    } else {
      // 发生了错误，请求无法发送
      console.error('Error', error.message);
    }

    return Promise.reject(error);
  }
);

export default request;
