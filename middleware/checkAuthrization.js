// const { Util } = require('./utils/tools')
// 检查token
// const unAuth = ['auth'] // 不鉴权的url列表
// // 鉴权中间件 
// app.use(async (ctx,next)=> {
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
//   await next()
// })


function checkAuthrization() {
    return async (ctx, next) => {
        console.log('hello')
        await next()
      // 中间件逻辑...
    }
  }

  module.exports = checkAuthrization