/**
 * @description meta 类型
 * @param {string} icon 图标
 * @param {string} title 标题
 **/
export interface IMetaType {
    icon: string
    title: string
}

/**
 * @description 菜单类型主体
 * @param {string} key 唯一 key
 * @param {string} path 页面路由
 * @param {string} component 组件对应的路径
 * @param {IMetaType} meta 路由元信息
 * @param {IMenuType[]} children 子级信息  
 **/ 
export interface IMenuType {
    key: string
    path: string
    component: string
    meta: IMetaType
    redirect?: string
    children?: IMenuType[]
}