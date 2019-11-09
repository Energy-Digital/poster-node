"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
require("module-alias/register");
// import authRouter from '@/router/auth'
const checkAuthrization_1 = require("@/middleware/checkAuthrization");
const query_1 = __importDefault(require("@/connect/query"));
const app = new koa_1.default();
const PORT = 9000;
query_1.default
    .authenticate() // test mysql connect
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
app.use(koa2_cors_1.default()); // 处理跨域的包，默认全部开放
app.use(koa_bodyparser_1.default());
app.use(checkAuthrization_1.checkAuthrization());
// app.use(authRouter.routes())
app.listen(PORT, () => {
    console.log(`Nodejs server will running in ${PORT}`);
});
//# sourceMappingURL=index.js.map