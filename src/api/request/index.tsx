import { message } from 'antd';
import axios from 'axios';
const [messageApi, _] = message.useMessage();

const axiosInstance = axios.create({
  baseURL: '/api', // 替换为你的API基本URL
  timeout: 5000, // 请求超时时间（毫秒）
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在请求发送前可以在这里进行一些处理，例如添加请求头
    // config.headers.Authorization = 'Bearer your-token';
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
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
        case 400:
          // 处理400错误
          console.error('Bad Request', data);
          messageApi.open({
            type: 'error',
            content: 'Bad Request',
          });
          break;
        case 403:
          // 处理403错误
          console.error('Forbidden', data);
          messageApi.open({
            type: 'error',
            content: 'Forbidden',
          });
          break;
        case 404:
          // 处理404错误
          console.error('Not Found', data);
          messageApi.open({
            type: 'error',
            content: 'Not Found',
          });
          break;
        case 500:
          // 处理500错误
          console.error('Internal Server Error', data);
          messageApi.open({
            type: 'error',
            content: 'Internal Server Error',
          });
          break;
        default:
          // 处理其他HTTP错误
          console.error('HTTP Error', status, data);
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

export default axiosInstance;
