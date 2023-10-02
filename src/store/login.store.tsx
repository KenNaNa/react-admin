import { makeAutoObservable } from 'mobx'
import { IGoLoginParams, toLogin, toLogout } from '@/api/module/user/login'
import { message } from 'antd'

class LoginStore {
    token = ''
    isLogin = false
    username = ''

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

            message.success(`${this.username} ${res.msg}`)
        })
    }

    goLogout() {
        toLogout().then(res => {
            this.isLogin = false
            this.token = ''
            this.username = ''

            message.success(`${this.username} ${res.msg}`)
        })
    }


}

const loginStore = new LoginStore()
export default loginStore