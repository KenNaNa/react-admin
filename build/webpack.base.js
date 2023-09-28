// webpack 公共配置文件
const path = require('path');
module.exports = {
  // 打包入口
  entry: path.join(__dirname, '../src/index.tsx'),

  // 打包出口
  output: {
    filename: 'static/js/[name].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/', // 打包后文件的公共前缀路径
  },
};
