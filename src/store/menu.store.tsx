import { makeAutoObservable } from 'mobx'
import { getMenu } from '@/api/module/user/menu'
import { IMenuType } from '@/config/menu.type'
import { getItem, setItem } from '@/utils/storage'
class MenuStore {
    menuData: IMenuType[] = getItem('menuData') ? JSON.parse(getItem('menuData')) : []

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