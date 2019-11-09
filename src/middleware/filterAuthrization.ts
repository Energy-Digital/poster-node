// 过滤鉴权中间件，决定某一部分可以不走jwt授权，用于登陆注册keep token alive这些情况


import { Context, Next } from "koa"
import { checkToken } from '@/utils/tools'

export function filterAuthrization() {
    return async (ctx: Context, next: Next) => {
        // 检查token
        const unAuth = ['auth'] // 不鉴权的url列表
        // 鉴权中间件 
        const requestUrl = ctx.request.url
        if (unAuth.filter((item) => requestUrl.indexOf(item) > -1).length <= 0) {
          const authorization = ctx.header.authorization
          if (!ctx.header || !ctx.header.authorization) {
              ctx.status = 401
              ctx.body = ({code: -1, msg: '未登陆'})
              return
          }
          try {
            const result = await checkToken(authorization)
          } catch (err) {
            ctx.status = 401
            ctx.body = ({code: -1, msg: '未登陆'})
            return
          }
        }
        await next()
    }
  }