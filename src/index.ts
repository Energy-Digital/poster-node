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
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(cors()); // 处理跨域的包，默认全部开放
app.use(bodyParser())
app.use(filterAuthrization())

app.use(authRouter.routes())
app.use(blogRouter.routes())

app.listen(PORT, () => {
  console.log(`Nodejs server will running in ${PORT}`)
})
