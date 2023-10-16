import { makeAutoObservable } from 'mobx'
import { getMenu } from '@/api/module/user/menu'
import { IMenuType } from '@/config/menu.type'
import { setItem } from '@/utils/storage'
class MenuStore {
    menuData: IMenuType[] = []

    constructor() {
        makeAutoObservable(this)
    }

    getMenuData() {
        getMenu().then(res => {
            this.menuData = (res.data || []) as IMenuType[]
            setItem('menuData', JSON.stringify(this.menuData))
        })
    }
}

const menuStore = new MenuStore()

export default menuStore