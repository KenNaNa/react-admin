// mockdata.js
import Mock from 'mockjs';

// 模拟登录接口
Mock.mock('/api/login', 'post', (options) => {
  // 解析请求参数
  const { username } = JSON.parse(options.body);

  // 假设用户名和密码验证成功，生成一个模拟的token
  const token = Mock.Random.guid();

  // 返回模拟数据
  return {
    code: 200,
    msg: '登录成功',
    data: {
      token,
      isLogin: true,
      username: username,
    },
  };
});


// 模拟退出登录接口
Mock.mock('/api/logout', 'post', {
  code: 200,
  msg: '退出登录成功',
  data: null,
});

// 模拟注册接口
Mock.mock('/api/register', 'post', (options) => {
  const { username } = options.body

  return {
    code: 200,
    msg: '注册成功',
    data: {
      username
    }
  }
})