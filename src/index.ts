import Koa from 'koa';
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import authRouter from './router/auth'
import { checkAuthrization } from './middleware/checkAuthrization'
import sequelize from './connect/query'

const app = new Koa()
const PORT = 9000

sequelize
  .authenticate() // test mysql connect
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(cors()); // 处理跨域的包，默认全部开放
app.use(bodyParser())
app.use(checkAuthrization())

app.use(authRouter.routes())

app.listen(PORT, () => {
  console.log(`Nodejs server will running in ${PORT}`)
})
