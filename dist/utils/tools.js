"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const formidable_1 = __importDefault(require("formidable"));
const utility_1 = __importDefault(require("utility"));
const secret = 'saltKey';
function setToken(payload) {
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: '2h' });
}
exports.setToken = setToken;
function checkToken(token) {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(decoded);
        });
    });
}
exports.checkToken = checkToken;
function handleCookie(cookie) {
    const getCookie = cookie.split(';');
    const newObj = {};
    getCookie.forEach((item) => {
        const objKey = item.split('=')[0].trim();
        const objRes = item.split('=')[1];
        newObj[objKey] = objRes;
    });
    return newObj;
}
exports.handleCookie = handleCookie;
async function treamentFormData(data) {
    return new Promise((resolve, reject) => {
        const form = new formidable_1.default.IncomingForm();
        form.parse(data, async (err, fields, files) => {
            if (err) {
                reject(err);
            }
            resolve(fields);
        });
    });
}
exports.treamentFormData = treamentFormData;
function md5Pwd(salt, pwd) {
    return utility_1.default.md5(utility_1.default.md5(pwd + salt));
}
exports.md5Pwd = md5Pwd;
//# sourceMappingURL=tools.js.map