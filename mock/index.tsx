import Mock from 'mockjs';

Mock.mock('/api/posts', 'get', {
  'code': 200,
  'msg': '请求成功',
  'data|5-10': [
    {
      'id|+1': 1,
      title: '@title',
      content: '@paragraph',
    },
  ],
});
