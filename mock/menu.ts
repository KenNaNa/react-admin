import Mock from 'mockjs'

Mock.mock('/api/menu', 'get', () => {
    return {
        code: 200,
        msg: '获取菜单成功',
        data: [
            {
                key: 'dashboard',
                path: '/dashboard',
                component: '/dashboard',
                meta: {
                    title: '仪表盘',
                    icon: 'DashboardTwoTone',

                },
            },
            {
                key: 'users',
                path: '/users',
                component: 'layout',
                meta: {
                    title: '用户管理',
                    icon: 'UserOutlined',
                },
                children: [
                    {
                        key: 'list',
                        path: '/users/list',
                        component: '/users/list',
                        meta: {
                            title: '用户列表',
                            icon: 'OrderedListOutlined'
                        }
                    },
                    {
                        key: 'add',
                        path: '/users/add',
                        meta: {
                            title: '添加用户',
                            icon: 'UserAddOutlined'
                        }
                    },
                ],
            },
        ]

    }
})