// 是否是开发模式
const isDev = process.env.NODE_ENV === "development";
// 设置 port
const port = isDev ? 8080 : 80
// 配置开发环境
const development = {
    '/user': 'http:xxxx.dev.com/user',
    '/order': 'http:xxx.dev.com/order',
    '/message': 'http:xxx.dev.com/message',
}
// 配置生产环境
const production = {
    '/user': 'http:xxxx.prod.com/user',
    '/order': 'http:xxx.prod.com/order',
    '/message': 'http:xxx.prod.com/message',
}
// build proxy
const buildProxy = (isDev) => {
    /**
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 后端服务器地址
        pathRewrite: { '^/api': '' }, // 可选，重写路径
        secure: false, // 如果后端服务器使用HTTPS，将其设置为true
      },
    },
     **/
    const proxy = {}
    const envs = isDev ? development : production
    for (let key in envs) {
        proxy[key] = {
            target: `${envs[key]}`,
            pathRewrite: { [`^${key}`]: '' },
            changeOrigin: true,
            secure: false,
        }
    }
    console.dir('proxy===>', proxy)
    return proxy;
}
module.exports = {
    isDev,
    port,
    buildProxy,
}