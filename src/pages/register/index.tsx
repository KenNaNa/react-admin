import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Input, Button, Card, Checkbox } from 'antd';
const { Item } = Form
const logo = 'https://github.com/ztK63LrD/article-pc/blob/master/src/assets/logo.jpg?raw=true'
import './index.less'
import { toRegister } from '@/api/module/user/login';

export default function Register() {
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        const { username, password } = values

        toRegister({ username, password }).then(res => {
            setDisabled(true)
            navigate('/login', { replace: true })
        }).catch(() => {
            setDisabled(false)
        })
    }
    return (
        <div className='login'>
            <Card className='login-container'>
                <img src={logo} alt="图片" className='login-logo' />
                {/* 登录表单 */}
                <Form disabled={disabled} validateTrigger={['onBlur', 'onChange']} onFinish={onFinish} initialValues={{ remember: true }}>
                    <Item name='username' rules={[
                        { required: true, message: '请输入手机号' },
                        {
                            pattern: /^1[3-9]\d{9}$/, // 设置正则匹配规则
                            validateTrigger: 'onBlur', // 设置触发时机失去焦点时触发
                            message: '请输入正确的手机号格式'
                        }
                    ]}>
                        <Input size='large' placeholder='请输入手机号' />
                    </Item>
                    <Item name='password' rules={[
                        { required: true, message: '请输入密码' },
                        {
                            len: 6, // 设置密码长度为6位数
                            validateTrigger: 'onBlur',
                            message: '请输入6位密码'
                        }
                    ]}>
                        <Input.Password size='large' placeholder='请输入密码' />
                    </Item>
                    <Item
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: '请确认密码',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次密码不一致'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password size='large' placeholder='确认密码' />
                    </Item>
                    <Item
                        name="remember"
                        valuePropName='checked'
                    >
                        <Checkbox className='login-checkbox-label'>
                            我已经阅读并同意 [用户协议] 和 [隐私条款]
                        </Checkbox>
                    </Item>
                    <Item>
                        <Button type='primary' htmlType='submit' size='large' block>注册</Button>
                    </Item>
                </Form>
            </Card>
        </div>
    )
}

