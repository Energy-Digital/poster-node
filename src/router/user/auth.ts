// 鉴权特殊模块 一般用来鉴权 登陆 注册
import Auth from '@/controllers/user/AuthController'
import { router } from '@/router'

const PREFIX = 'auth'

router.get(`/${PREFIX}/access_token`, Auth.accessToken)
router.get(`/${PREFIX}/login`, Auth.login)
router.post(`/${PREFIX}/register`, Auth.register)


export default router
