"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 鉴权特殊模块 一般用来鉴权 登陆 注册
const koa_router_1 = __importDefault(require("koa-router"));
const AuthController_1 = __importDefault(require("@/modules/user/AuthController"));
const router = new koa_router_1.default();
router.get('/auth/access_token', AuthController_1.default.accessToken);
router.get('/auth/login', AuthController_1.default.login);
exports.default = router;
//# sourceMappingURL=auth.js.map