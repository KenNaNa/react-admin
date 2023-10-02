export interface IData {
    [key: string]: any
}

/**
 * @description 普通数据接口
 * @param {number} code 接口响应码
 * @param {string} msg 响应信息
 * @param {T} data 数据项列表，类型为泛型 T
 **/ 
export interface IApiResponse<T> {
    code: number;
    msg: string;
    data: T; // 使用泛型来表示data字段的类型
}


/**
 * @description 列表分页接口
 * @param {number} currentPage 当前页码 
 * @param {number} pageSize 每页显示的数量 
 * @param {number} totalRecords 总记录数 
 * @param {number} totalPages 总页数 
 * @param {T[]} data 数据项列表，类型为泛型 T
 **/ 
export interface PaginationData<T> {
    currentPage: number;     // 当前页码
    pageSize: number;        // 每页显示的数量
    totalRecords: number;    // 总记录数
    totalPages: number;      // 总页数
    data: T[];               // 数据项列表，类型为泛型 T
}
 