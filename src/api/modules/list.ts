import axiosInstance from '@/api/axios';

const getList = () => {
  return axiosInstance.get('api/posts');
};

export { getList };
