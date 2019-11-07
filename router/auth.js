// 鉴权特殊模块
const Router = require('koa-router');
const { Auth } = require('../modules/authController')

const router = new Router()

router.get('/auth/access_token', Auth.accessToken)

module.exports = router
