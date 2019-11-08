// 鉴权特殊模块
import Router from 'koa-router'
import Auth from '../modules/authController'

const router = new Router()

router.get('/auth/access_token', Auth.accessToken)
router.get('/auth/login', Auth.login)

export default router
