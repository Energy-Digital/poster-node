// 鉴权特殊模块 一般用来鉴权 登陆 注册
import Router from 'koa-router'
import Auth from '@/modules/user/AuthController'

const router = new Router()

router.get('/auth/access_token', Auth.accessToken)
router.get('/auth/login', Auth.login)

export default router
