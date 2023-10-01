import React from 'react'
import axiosInstance from '../request';

const getList = () => {
  return axiosInstance.get('/posts');
};

export { getList };
