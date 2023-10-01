import axiosInstance from '../request';

const getList = () => {
  return axiosInstance.get('api/posts');
};

export { getList };
