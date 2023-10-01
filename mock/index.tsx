import Mock from 'mockjs';

Mock.mock('/api/posts', 'get', {
  'list|5-10': [
    {
      'id|+1': 1,
      title: '@title',
      content: '@paragraph',
    },
  ],
});
