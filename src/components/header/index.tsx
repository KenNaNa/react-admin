import React from 'react';
import { Layout, Button, Popconfirm } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined } from '@ant-design/icons';
const { Header } = Layout;
import './index.less'
import useStore from '@/store';
import { getItem, removeItem } from '@/utils/storage';
import { useNavigate } from 'react-router';

export default function TopHeader({ colorBgContainer, collapsed, setCollapsed }: any) {
    const { loginStore } = useStore()
    const username = loginStore.username || getItem('username')
    const navigate = useNavigate()
    const onConfirm = () => {
        // window.location.href = '/login'
        navigate('/login', { replace: true })
        loginStore.isLogin = false
        loginStore.token = ''
        loginStore.username = ''

        removeItem('isLogin')
        removeItem('token')
        removeItem('username')
    }
    return (
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between' }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />

            <div className="user-info">
                <span className="user-name">{username}</span>
                <span className="user-logout">
                    <Popconfirm
                        onConfirm={onConfirm}
                        title="是否确认退出？" okText="退出" cancelText="取消">
                        <LogoutOutlined /> 退出
                    </Popconfirm>
                </span>
            </div>
        </Header>
    )
}