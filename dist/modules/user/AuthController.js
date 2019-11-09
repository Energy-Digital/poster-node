"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    static async login(ctx, next) {
        try {
            ctx.body = "Hi login";
        }
        catch (e) {
            ctx.response.body = e;
        }
    }
    // 处理鉴权
    static async accessToken(ctx, next) {
        console.log('hello');
        try {
            ctx.body = "Hi accessToken";
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map