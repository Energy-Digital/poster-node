import initStone  from '@/utils/redis'
import CookieConfig from '@/utils/cookie'
import mysqlQuery from '@/connect/query'
import { Next, Context } from 'koa'
import { handleCookie, treamentFormData ,md5Pwd } from '@/utils/tools'
import { FAILCODE, PASSWORDSALT } from '@/utils/variable'
import User from '@/models/user.model'

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
      const getCookie = ctx.request.header.cookie
      if (getCookie) {
        // redisStore : {
        //   token: {
        //       username: 'xxx',
        //       userid: 1233
        //   }
        // }
        const parseCookie = handleCookie(getCookie)
        const getCookieToken = parseCookie['_token']
        const redis = initStone()
        // const result = await redis.hset('')
      } else {
        ctx.status = 401
        ctx.body = ({code: FAILCODE, msg: '鉴权失败'})
      }
      try {
        ctx.body = "Hi accessToken";
      }  catch(e) {
         console.log(e)
      }
    }

    static async register(ctx: Context, next: Next) {
      try {
        const {username, pwd} = await treamentFormData(ctx.req) as {username: string , pwd: string}
        console.log(username)
        const handlePsw = md5Pwd(PASSWORDSALT, pwd)

        const [user, created] = await (User as any).findOrCreate(
          {where: {username: username}, defaults: {psw: pwd}}
        )

        console.log('----created-------')
        console.log(created)
        console.log('----created-------')


        console.log('----user-------')
        console.log(user)
        console.log('----user-------')

        ctx.body = user

      } catch (e) {
        console.log(e)
      }
    }
}

export default AuthController
