import initStone  from '@/utils/redis'
import { CookieConfig } from '@/utils/cookie'
import { Next, Context } from 'koa'
import { handleCookie, 
  treamentFormData ,
  md5Pwd, 
  setSessionToken,
  WrapResponse,
  filterforObj,
  setToken
} from '@/utils/tools'
import { FAILCODE, PASSWORDSALT, ERRORTIPS, ACCESS_TOKEN_EXPIRE_Time, SUCCESSCODE } from '@/utils/variable'
import User from '@/models/user.model'

class AuthController {

  static async login(ctx: Context, next: Next) {
      try {
        // 发token 写cookie 存redis
        const {username, psw} = ctx.query
        if ((username && username.length > 0) && (psw && psw.length > 0)) {
          const handlePsw = md5Pwd(psw)
          const doc = await User.findOne({ where: { username: username, psw: handlePsw }})
          if (doc) {
            const data = doc.dataValues
            const returnObj = filterforObj(data, ['psw', 'enable'])
            const CookieOpt = CookieConfig()
            /* redis start */
            const redis = initStone()
            redis.hmset(data.token, new Map([
              ['username', data.username], 
              ['id', data.id ],  
              ['tel', data.tel], 
              ['psw', data.psw],
              ['avatar',  data.avatar] ,
              ['updateTime', new Date().getTime()] 
            ]))
            redis.expire(data.token, ACCESS_TOKEN_EXPIRE_Time) // 设置过期时间
            /* redis end */
            const newToken = setToken({username: data.username, psw: data.psw})
            const retData = {
                ...returnObj,
                access_token: newToken
            }
            ctx.cookies.set('_token', data.token , CookieOpt)
            ctx.body = WrapResponse(retData, SUCCESSCODE, '登陆成功')
          } else {
            ctx.body = WrapResponse(undefined, FAILCODE, '登陆失败')
          }
        }
      } catch (e) {
        ctx.body = WrapResponse(undefined, FAILCODE, ERRORTIPS)
      }
  }

    // 处理鉴权 好嗨复杂的这个
  static async accessToken(ctx: Context, next: Next) {
      const getCookie = ctx.request.header.cookie
      if (getCookie) {
        const parseCookie = handleCookie(getCookie)
        const getCookieToken = parseCookie['_token']
        const redis = initStone()
        const getRedisExist = await redis.exists(getCookieToken)
        if (getRedisExist === 1) { // redis找得到
          const getRedisExistInfo = await redis.hgetall(getCookieToken)
          const retObjfilterForRedis = filterforObj(getRedisExistInfo, ['psw', 'enable'])
          const {username, psw} = getRedisExistInfo
          const newToken = setToken({username, psw})
          const retData = {
              ...retObjfilterForRedis,
              access_token: newToken,
          }
          ctx.body = WrapResponse(retData, SUCCESSCODE, 'success')
        } else {  // redis找得到
            const findToken = await User.findOne({ where: { token: getCookieToken}})
            if (findToken) {
              const getUserInfo = findToken.dataValues
              const filterObj = filterforObj(getUserInfo, ['psw', 'enable'])
              /* redis start */
              const redis = initStone()
              redis.hmset(getUserInfo.token, new Map([
                ['username', getUserInfo.username], 
                ['id', getUserInfo.id ],  
                ['tel', getUserInfo.tel], 
                ['avatar',  getUserInfo.avatar] ,
                ['updateTime', new Date().getTime()] 
              ]))
              redis.expire(getUserInfo.token, ACCESS_TOKEN_EXPIRE_Time) // 设置过期时间
              const newToken = setToken({username: getUserInfo.username, psw: getUserInfo.psw})
              const retData = {
                ...filterObj,
                access_token: newToken,
            }
            ctx.body = WrapResponse(retData, SUCCESSCODE, 'success')
            } else {
              ctx.status = 401
              ctx.body = WrapResponse(undefined, FAILCODE, 'cookie失效去登陆')
            }
        }

      } else {
        ctx.status = 401
        ctx.body = WrapResponse(undefined, FAILCODE, 'cookie失效去登陆')
      }
    }

    // 注册接口
    static async register(ctx: Context, next: Next) {
      try {
        const {username, pwd} = await treamentFormData(ctx.req) as {username: string , pwd: string}
        const handlePsw = md5Pwd(pwd)

        const [user, created] = await User.findOrCreate(
          { where: {username: username}, defaults: {
              psw: handlePsw,
              token: setSessionToken({username: username, password: pwd})
          }}
        )
        
        if (created === false) {
           ctx.body = WrapResponse(undefined, FAILCODE, '当前用户名已存在，请重试')
        } else {
           const getUserInfo = user.dataValues
           const redis = initStone()
           redis.hmset(getUserInfo.token, new Map([
            ['username', getUserInfo.username], 
            ['id', getUserInfo.id ],  
            ['tel', getUserInfo.tel], 
            ['psw', getUserInfo.psw],
            ['avatar',  null] ,
            ['updateTime', new Date().getTime()] 
          ]))
          redis.expire(getUserInfo.token, ACCESS_TOKEN_EXPIRE_Time) // 设置过期时间
          /* redis end */
          const newToken = setToken({username: getUserInfo.username, psw: getUserInfo.psw})
          const returnObj = filterforObj(getUserInfo, ['psw', 'enable'])
          const retData = {
              ...returnObj,
              access_token: newToken
          }
          const CookieOpt = CookieConfig()
          ctx.cookies.set('_token', user.token , CookieOpt)
          ctx.body = WrapResponse(retData, SUCCESSCODE, '操作成功')
        }
      } catch (e) {
        ctx.body = WrapResponse(undefined, -2, ERRORTIPS)
      }
    }
}

export default AuthController
