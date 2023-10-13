# react-admin

还是有问题：登录之后去获取菜单，搞两个角色，一个是 admin，一个是 user

如果觉得对你有帮助的话，可以赞助一下我也行，请我喝下咖啡也行

![](./pay.jpg)

[🎉 A magical react admin](https://github.com/KenNaNa/react-admin/tree/main)

目前就是从零开始使用 webpack 搭建环境，用到是 webpack5 来搭建 react 环境，使用到了以下这些插件

- babel-loader 用来转义 es6 -> es5
- copy-webpack-plugin 用来拷贝一些文件
- css-loader 加载 css
- less-loader 将 less 转成 css
- style-loader 将 css 加载到 dom 元素上面
- css-minimizer-webpack-plugin 用于分离css，可以缓存
- html-webpack-plugin 打包压缩 html
- mini-css-extract-plugin 分离 css
- speed-measure-webpack-plugin 用于测量速度
- terser-webpack-plugin 压缩 js
- thread-loader 多线程打包
- webpack-dev-server 启动本地服务
- webpack-merge 合并公共变量
- antd 组件库
- axios 接口请求库
- mobx react store
- react
- react-router-dom

接下来我会继续实现以下的功能，包括学习

- react 基础知识
- react-router-dom 基础知识
- mobx 共享仓库

并写成对应的文章，发布出来，供大家学习

可以给我点赞，关注我下我的 github 地址


React v18 是 React 框架的一个版本，用于构建前端应用程序。一个后台管理系统通常需要一系列功能，以便有效地管理和监控一个网站或应用程序。以下是一些常见的后台管理系统功能，你可以考虑在 React v18 中实现：

1. 用户认证与授权：
   - 用户登录和注册功能。
   - 不同用户角色的权限管理。
   - 访问控制，确保只有授权用户可以访问特定页面和功能。

2. 仪表盘：
   - 显示关键指标、统计数据和概览信息。
   - 可自定义的仪表盘布局。

3. 用户管理：
   - 管理用户帐户信息。
   - 分配和管理用户权限和角色。
   - 锁定或禁用用户帐户。

4. 数据管理：
   - CRUD（创建、读取、更新、删除）操作，用于管理应用程序的数据。
   - 数据筛选、排序和搜索功能。
   - 数据可视化和报表生成。

5. 权限管理：
   - 角色和权限的细粒度控制，以确保用户只能访问其所需的功能和数据。
   - 审计日志，记录敏感操作和权限变更。

6. 文件管理：
   - 上传、下载和管理文件和文档。
   - 文件版本控制和历史记录。

7. 通知与消息：
   - 发送通知和消息给用户。
   - 邮件通知、站内信或消息通知的实现。

8. 日志与监控：
   - 记录应用程序日志和错误。
   - 实时监控应用程序性能和健康状态。

9. 设置和配置：
   - 应用程序设置和配置项的管理。
   - 可配置的主题和样式。

10. 多语言支持：
    - 支持多种语言和国际化。

11. 安全性：
    - 防止跨站脚本攻击 (XSS) 和跨站请求伪造 (CSRF)。
    - 数据加密和安全存储。

12. 数据备份和恢复：
    - 定期备份数据，以防止数据丢失。
    - 数据恢复功能。

13. 扩展性和自定义：
    - 允许添加自定义插件、组件或功能。
    - 支持插件化架构，使扩展功能更容易。

14. 客户端路由：
    - 使用 React 路由库来实现客户端端导航。

15. 响应式设计：
    - 适应不同屏幕尺寸和设备类型，确保在移动设备上正常工作。

16. 性能优化：
    - 优化前端性能，减少加载时间。
    - 代码分割和懒加载以减小初始包的大小。

17. 自动化测试：
    - 编写单元测试和集成测试以确保应用程序质量。

这些功能可以根据具体的后台管理系统需求进行自定义和扩展。在 React v18 中，你可以利用新的特性和工具来构建更灵活、交互性强、性能优越的后台管理系统。

目前实现了登录页面


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/314359715706443085e0c1afb34cf0ec~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1339&h=601&s=837380&e=png&b=f6efec)

实现了动态菜单，动态路由


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44409e6565864da9b2ca13ebda4694ea~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1352&h=587&s=46386&e=png&b=ffffff)

react admin

[组件库](https://ant.design/docs/react/getting-started-cn)

[react](https://react.dev/)

[react-router](https://reactrouter.com/en/main)

[mobx](https://juejin.cn/post/6985871185049452580)


[前端工程化](https://juejin.cn/post/7111922283681153038?searchId=20230928235758D2B65B5CFA0E66F85297#heading-31)

## 文章说明

- [🎉🎉🎉一个神奇的 react 后台管理系统，就这样应运而生](https://juejin.cn/post/7284468618020487183)

- [🎉🎉🎉一文全面了解：一个神奇的 react-antd-admin 接口加密方式](https://juejin.cn/post/7285540804735746102)

- [🎉🎉🎉一文全面了解：一个神奇的 react-antd-admin 鉴权方式](https://juejin.cn/post/7286127842421030948)

- [🎉🎉🎉一文全面了解：一个神奇的 react-antd-admin 动态菜单](https://juejin.cn/post/7285942684174336063)

- [🎉🎉🎉一文全面了解：一个神奇的 react-antd-admin 动态路由](https://juejin.cn/post/7285939168303661067)

- [🎉🎉🎉一文全面了解：一个神奇的 react-antd-admin mobx 设计](https://juejin.cn/spost/7286362110212522047)
