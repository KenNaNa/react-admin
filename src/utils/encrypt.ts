// 使用对称加密方式
import CryptoJS from 'crypto-js';
// 替换为你的密钥
const secretKey = 'your-secret-key';
/**
 * @description 加密接口数据
 * @param {object} data 接口数据
 **/ 
export const encryptData = (data: Record<string, any>) => {
    const dataString = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(dataString, secretKey);
    return encrypted.toString();
}

export const decryptData = (encryptedData: string) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedDataString = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedDataString);
}



