import axiosInstance from '@/api/axios';

const getList = () => {
  return request.get('api/posts');
};

export { getList };
