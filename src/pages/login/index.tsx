import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '@/store'
import { Card, Form, Input, Checkbox, Button, message } from 'antd'
import PageWithTitle from '@/components/pageWithTitle'
const logo = 'https://github.com/ztK63LrD/article-pc/blob/master/src/assets/logo.jpg?raw=true'
import './index.less'
const Item = Form.Item

const Login = () => {
    const { loginStore } = useStore()
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)
    // 获取表单数据
    const onFinish = async (values: any) => {
        console.log(values)
        const { username, password } = values
        try {
            // 登录 
            await loginStore.goLogin({ username, password })
            setDisabled(true)
            // 提示用户登录成功
            message.success('登录成功！').then(() => {
                // 重新加载当前页面
                navigate('/home', { replace: true })
            }).then(() => {
                setDisabled(false)
            })
        } catch (error: any) {
            setDisabled(false)
            message.error(error.response?.data.message || '登录失败')
        }

    }
    // 去注册
    const toRegister = () => {
        navigate('/register', { replace: true })
    }

    const MainLogin = () => {
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
                            <Input size='large' placeholder='请输入密码' />
                        </Item>
                        <Item
                            name="remember"
                            valuePropName='checked'
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Checkbox className='login-checkbox-label'>
                                    我已经阅读并同意 [用户协议] 和 [隐私条款]
                                </Checkbox>
                                <Button onClick={toRegister} style={{ width: '100px' }} type='primary' size='small'>去注册</Button>
                            </div>

                        </Item>
                        <Item>
                            <Button type='primary' htmlType='submit' size='large' block>登录</Button>
                        </Item>
                    </Form>
                </Card>
            </div>
        )
    }

    return (
        <PageWithTitle title='登录' children={<MainLogin />} />
    )
}




export default Login