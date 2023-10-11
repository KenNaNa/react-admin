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
                        },
                    },
                    {
                        key: 'add',
                        path: '/users/add',
                        component: '/users/list',
                        meta: {
                            title: '添加用户',
                            icon: 'UserAddOutlined'
                        }
                    },
                ],
            },
            {
                key: 'company',
                path: '/company',
                component: 'layout',
                meta: {
                    title: '公司管理',
                    icon: 'UserOutlined',
                },
                children: [
                    {
                        key: 'sales',
                        path: '/company/sales',
                        component: 'layout',
                        meta: {
                            title: '销售公司',
                            icon: 'OrderedListOutlined'
                        },
                        children: [
                            {
                                key: 'salesList',
                                path: '/company/sales/list',
                                component: '/company/sales/list',
                                meta: {
                                    title: '销售列表',
                                    icon: 'OrderedListOutlined'
                                }
                            },
                            {
                                key: 'salesAdd',
                                path: '/company/sales/add',
                                component: '/company/sales/add',
                                meta: {
                                    title: '添加销售',
                                    icon: 'UserAddOutlined'
                                },
                            },
                        ]
                    },
                ],
            }
        ]
    }
})