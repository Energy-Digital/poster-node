import Koa from 'koa';
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import alias from 'module-alias'
import path from 'path'
const initAlias = () => {
  alias.addAliases({
    '@': path.resolve(__dirname)
  })
}
initAlias()
import authRouter from '@/router/user/auth'
import blogRouter from '@/router/blog/blog'
import { filterAuthrization } from '@/middleware/filterAuthrization'
import sequelize from './connect/query'

const app = new Koa()
const PORT = 9000

sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch(err => {
    console.error('数据库连接失败:', err);
  });

app.use(cors({
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'], //设置允许的HTTP请求类型
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
})); // 处理跨域的包，默认全部开放
app.use(bodyParser())
app.use(filterAuthrization())

app.use(authRouter.routes())
app.use(blogRouter.routes())

app.listen(PORT, () => {
  console.log(`Nodejs server will running in ${PORT}`)
})
