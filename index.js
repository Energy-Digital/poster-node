const koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
// const authRouter = require('./router/auth')
const checkAuthrization = require('./middleware/checkAuthrization')
const app = new koa()
const sequelize = require('./connect/query')
const PORT = 9000

app.use(cors()); // 处理跨域的包，默认全部开放
app.use(bodyParser())
app.use(checkAuthrization())

// app.use(authRouter.routes(), authRouter.allowedMethods())

app.listen(PORT, () => {
  console.log(`Nodejs server will running in ${PORT}`)
})
