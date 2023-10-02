import Mock from 'mockjs'

Mock.mock('/api/menu', 'get', () => {
    return {
        code: 200,
        msg: '获取菜单成功',
        data: [
            {
                "id": 1, 
                "label": "Dashboard",
                "icon": "dashboard",
                "url": "/dashboard"
            },
            {
                "id": 2,
                "label": "Products",
                "icon": "products",
                "url": "/products",
                "children": [
                    {
                        "id": 21,
                        "label": "All Products",
                        "url": "/products/all"
                    },
                    {
                        "id": 22,
                        "label": "Add New Product",
                        "url": "/products/add"
                    },
                    {
                        "id": 23,
                        "label": "Categories",
                        "url": "/products/categories",
                        "children": [
                            {
                                "id": 231,
                                "label": "Electronics",
                                "url": "/products/categories/electronics"
                            },
                            {
                                "id": 232,
                                "label": "Clothing",
                                "url": "/products/categories/clothing"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 3,
                "label": "Orders",
                "icon": "orders",
                "url": "/orders"
            },
            {
                "id": 4,
                "label": "Users",
                "icon": "users",
                "url": "/users"
            }
        ]

    }
})