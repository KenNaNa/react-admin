import { makeAutoObservable } from 'mobx'
import { IGoLoginParams, toLogin, toLogout } from '@/api/module/user/login'
import { setItem, getItem, removeItem } from '@/utils/storage'
import menuStore from './menu.store'
class LoginStore {
    token = getItem('token') || ''
    isLogin = Boolean(getItem('isLogin')) || false
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
            setItem('isLogin', `${res.data.isLogin}`)
            setItem('token', `${res.data.token}`)
            setItem('username', `${res.data.username}`)

            this.isLogin = res.data.isLogin
            this.token = res.data.token
            this.username = res.data.username

            menuStore.getMenuData()
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
        })
    }


}

const loginStore = new LoginStore()
export default loginStore