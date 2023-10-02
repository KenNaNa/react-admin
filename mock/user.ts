// mockdata.js
import Mock from 'mockjs';

// 模拟登录接口
Mock.mock('/api/login', 'post', (options) => {
  // 解析请求参数
  const { username, password } = JSON.parse(options.body);

  // 假设用户名和密码验证成功，生成一个模拟的token
  const token = Mock.Random.guid();

  // 返回模拟数据
  return {
    code: 200,
    msg: '登录成功',
    data: {
      token,
      isLoggedIn: true,
      username,
    },
  };
});


// 模拟退出登录接口
Mock.mock('/api/logout', 'post', {
  code: 200,
  msg: '退出登录成功',
  data: null,
});