// webpack 公共配置文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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

  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },

  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配.ts,tsx文件
        use: {
          loader: 'babel-loader',
          options: {
            // 预设执行顺序由左到右，所以先处理 ts，再处理tsx
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/, //匹配 css 文件
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true, // 自动注入静态资源
    }),

    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
    }),
  ],
};
