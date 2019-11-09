import Koa from 'koa';
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import alias from 'module-alias'
const initAlias = () => {
  alias.addAliases({
    '@': __dirname
  })
}
initAlias()
import authRouter from '@/router/auth'
import { checkAuthrization } from '@/middleware/checkAuthrization'
const app = new Koa()
const PORT = 9000

app.use(cors()); // 处理跨域的包，默认全部开放
app.use(bodyParser())
app.use(checkAuthrization())

app.use(authRouter.routes())

app.listen(PORT, () => {
  console.log(`Nodejs server will running in ${PORT}`)
})
