"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initCookieConf = {
    expires: new Date().getTime() + (1000 * 60 * 60 * 24 * 365),
    maxAge: (1000 * 60 * 60 * 24 * 365),
    path: "/",
    domain: "",
    secure: false,
    httpOnly: true,
    overwrite: true,
};
const CookieConfig = (conf) => {
    66;
    const retOpt = Object.assign(Object.assign({}, initCookieConf), conf);
    return retOpt;
};
exports.default = CookieConfig;
//# sourceMappingURL=cookie.js.map