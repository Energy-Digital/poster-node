const koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
// const authRouter = require('./router/auth')
const checkAuthrization = require('./middleware/checkAuthrization')
const app = new koa()

app.use(cors());
app.use(bodyParser())
// app.use(authRouter.routes(), authRouter.allowedMethods())
app.use(checkAuthrization())

app.listen(3000, () => {
  console.log('server run in port 3000')
})
