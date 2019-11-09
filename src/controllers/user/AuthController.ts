import initStone  from '@/utils/redis'
import CookieConfig from '@/utils/cookie'
import query from '@/connect/query'
import { Next, Context } from 'koa'


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
