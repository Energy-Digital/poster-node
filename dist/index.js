"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const module_alias_1 = __importDefault(require("module-alias"));
const path_1 = __importDefault(require("path"));
const initAlias = () => {
    module_alias_1.default.addAliases({
        '@': path_1.default.resolve(__dirname)
    });
};
initAlias();
const auth_1 = __importDefault(require("@/router/auth"));
const checkAuthrization_1 = require("@/middleware/checkAuthrization");
const app = new koa_1.default();
const PORT = 9000;
app.use(koa2_cors_1.default()); // 处理跨域的包，默认全部开放
app.use(koa_bodyparser_1.default());
app.use(checkAuthrization_1.checkAuthrization());
app.use(auth_1.default.routes());
app.listen(PORT, () => {
    console.log(`Nodejs server will running in ${PORT}`);
});
//# sourceMappingURL=index.js.map