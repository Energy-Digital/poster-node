import { Context, Next } from "koa"
import Util from '../utils/tools'

export function checkAuthrization() {
    return async (ctx: Context, next: Next) => {
      console.log('middleware')
    // 检查token
    // const unAuth = ['auth'] // 不鉴权的url列表
    // // 鉴权中间件 
    //   const requestUrl = ctx.request.url
    //   if (unAuth.filter((item) => requestUrl.indexOf(item) > -1).length <= 0) {
    //     const authorization = ctx.header.authorization
    //     if (!ctx.header || !ctx.header.authorization) {
    //         ctx.status = 401
    //         ctx.body = ({code: -1, msg: '未登陆'})
    //         return
    //     }
    //     try {
    //       const result = await Util.checkToken(authorization)
    //     } catch (err) {
    //       ctx.status = 401
    //       ctx.body = ({code: -1, msg: '未登陆'})
    //       return
    //     }
    //   }
        await next()
      // 中间件逻辑...
    }
  }