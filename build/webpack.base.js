// webpack 公共配置文件
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development"; // 是否是开发模式
module.exports = {
  // 打包入口
  entry: path.join(__dirname, "../src/index.tsx"),

  // 打包出口
  output: {
    filename: "static/js/[name].js", // 每个输出js的名称
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
  },

  resolve: {
    extensions: [".js", ".tsx", ".ts"],
    modules: [path.resolve(__dirname, "../node_modules")], // 查找第三方模块只在本项目的node_modules中查找
  },

  cache: {
    type: "filesystem", // 使用文件缓存
  },

  module: {
    rules: [
      {
        include: [path.resolve(__dirname, "../src")], // 只对项目src文件的ts,tsx进行loader解析
        test: /.(ts|tsx)$/, // 匹配.ts,tsx文件
        use: ["thread-loader", "babel-loader"],
      },
      {
        include: [path.resolve(__dirname, "../src")],
        test: /\.css$/, //匹配 css 文件
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css,
          "css-loader",
          "postcss-loader",
        ],
      },

      {
        include: [path.resolve(__dirname, "../src")],
        test: /\.less$/, //匹配 css 文件
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },

      {
        test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/images/[name][ext]", // 文件输出目录和命名
        },
      },

      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/fonts/[name][ext]", // 文件输出目录和命名
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/media/[name][ext]", // 文件输出目录和命名
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true, // 自动注入静态资源
    }),

    new webpack.DefinePlugin({
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
    }),
  ],
};
