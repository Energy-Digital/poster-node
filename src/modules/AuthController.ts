import Util from '../utils/tools'
import utils from 'utility'
import initStone  from '../utils/redis'
import CookieConfig from '../utils/cookie'
import query from '../connect/query'
import { Next, Context } from 'koa'

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
  static async login(ctx: Context, next: Next) {
      try {
        ctx.body = "Hi login";
      } catch (e) {
        ctx.response.body = e
      }
  }

    // 处理鉴权
  static async accessToken(ctx: Context, next: Next) {
    console.log('hello')
      try {
        ctx.body = "Hi accessToken";
      }  catch(e) {
         console.log(e)
      }
    }
}

export default AuthController
