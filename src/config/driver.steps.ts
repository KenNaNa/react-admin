// 配置引导页提示选项
import { DriveStep } from 'driver.js'
export const driverSteps = {
    steps: [
        {
            element: '.ant-btn.ant-btn-text.ant-btn-icon-only',
            popover: {
                title: '展开收起',
                description: '可以点击按钮来展开收起左侧菜单.'
            }
        },
        {
            element: '.user-info',
            popover: {
                title: '退出操作',
                description: '可以点击按钮来退出登录.'
            }
        },
        {
            element: '.copy-text',
            popover: {
                title: '文本拷贝',
                description: '点击拷贝按钮可以进行文本拷贝'
            }
        },
        {
            element: '.react-quill-text',
            popover: {
                title: '富文本编辑器',
                description: '可以进行富文本编辑'
            }
        }
    ] as DriveStep []
}