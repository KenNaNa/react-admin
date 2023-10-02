// 把所有模块进行一个统一的处理，导出一个统一的方法 useStore
import React from "react";
import loginStore from "./login.store";

class RootStore {
    loginStore
    constructor() {
        this.loginStore = loginStore
    }
}

const rootStore = new RootStore()

const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export default useStore
