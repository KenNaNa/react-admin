import { makeAutoObservable } from 'mobx'
import { IGoLoginParams, toLogin, toLogout } from '@/api/module/user/login'
import { message } from 'antd'
import { setItem, getItem, removeItem } from '@/utils/storage'

class LoginStore {
    token = getItem('token') || ''
    isLogin = false
    username = getItem('username') || ''

    constructor() {
        makeAutoObservable(this)
    }


    goLogin({username, password}: IGoLoginParams) {
        const params = {
            username,
            password,
        }

        toLogin(params).then((res) => {
            this.isLogin = res.data.isLogin
            this.token = res.data.token
            this.username = res.data.username

            setItem('isLogin', `${this.isLogin}`)
            setItem('token', `${this.token}`)
            setItem('username', `${this.username}`)

            message.success(`${this.username} ${res.msg}`)
        })
    }

    goLogout() {
        toLogout().then(res => {
            this.isLogin = false
            this.token = ''
            this.username = ''

            removeItem('isLogin')
            removeItem('token')
            removeItem('username')
            

            message.success(`${this.username} ${res.msg}`)
        })
    }


}

const loginStore = new LoginStore()
export default loginStore