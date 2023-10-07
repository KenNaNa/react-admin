import { IMenuType } from "./menu.type"
// 配置静态菜单
const staticMenu: IMenuType[] = [
    {
       key: 'home',
       path: '/home',
       component: '/home',
       meta: {
            title: '首页',
            icon: 'HomeOutlined',
       } 
    },
    {
        key: 'about',
        path: '/about',
        component: '/about',
        meta: {
            title: '关于',
            icon: 'AlibabaOutlined'
        }
    },
]

export default staticMenu