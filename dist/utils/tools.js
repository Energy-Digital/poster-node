"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const formidable_1 = __importDefault(require("formidable"));
const secret = 'saltKey';
class Util {
    static setToken(payload) {
        return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: '2h' });
    }
    static checkToken(token) {
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
    static handleCookie(cookie) {
        const getCookie = cookie.split(';');
        const newObj = {};
        getCookie.forEach((item) => {
            const objKey = item.split('=')[0].trim();
            const objRes = item.split('=')[1];
            newObj[objKey] = objRes;
        });
        return newObj;
    }
    static async treamentFormData(data) {
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
}
exports.default = Util;
//# sourceMappingURL=tools.js.map