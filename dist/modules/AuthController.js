"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function md5Pwd(pwd: string){
//   const salt = 'yikesaiting'
//   return utils.md5(utils.md5(pwd + salt))
// }
// function refreshToken(info) {
//   const userInfo = info
//   const token = Util.setToken(userInfo)
//   return token
// }
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
//# sourceMappingURL=authController.js.map