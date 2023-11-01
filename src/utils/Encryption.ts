// import CryptoJS from "crypto-js";
var CryptoJS = require("crypto-js");

export const getEncrypted = (message:string) => {
    const key = process.env.EMAIL_VALIDATION_ENCRYPTION_KEY;
    if(key){
        const encrypted = CryptoJS.AES.encrypt(message, key).toString();
        return encrypted;
    }
}