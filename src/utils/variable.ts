import { Context ,Next } from 'koa'

const FAILCODE = -1
const SUCCESSCODE = 0
const PASSWORDSALT = 'FGYH459T7Y45HG5FYG34GR&$()?' // password md5 salt
const SETSESSIONTOKENSALT = 'AF98RF8T34U3UG34598389' // session md5 salt
const JWTSALT = 'FREIFH348V4+30G23['
const ERRORTIPS = '系统错误，请联系帅气的管理员'
const ACCESS_TOKEN_EXPIRE_Time = 60 * 60 * 2

export {
    SUCCESSCODE,
    FAILCODE,
    JWTSALT,
    PASSWORDSALT,
    SETSESSIONTOKENSALT,
    ERRORTIPS,
    ACCESS_TOKEN_EXPIRE_Time
}