// 鉴权特殊模块 一般用来鉴权 登陆 注册
import Auth from '@/controllers/user/AuthController'
import router from '@/router'

router.get('/auth/access_token', Auth.accessToken)
router.get('/auth/login', Auth.login)

export default router
