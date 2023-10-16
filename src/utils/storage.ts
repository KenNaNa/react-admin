
/**
 * @description 设置缓存
 * @param {string} key 缓存key
 * @param {string} val 缓存值
 **/ 
const setItem = (key: string, val: string) =>{
  return window.localStorage.setItem(key, val)
}
/**
 * @description 获取缓存
 * @param {string} key 缓存的 key
 **/
const getItem = (key: string)=>{
  return window.localStorage.getItem(key) || ''
}

/**
 * @description 删除缓存
 * @param {string} key 缓存的 key
 **/ 
const removeItem = (key: string)=>{
  return window.localStorage.removeItem(key)
}

export {
    setItem,
    getItem,
    removeItem
}