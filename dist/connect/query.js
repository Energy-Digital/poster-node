"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
let INIT_CONFIG = {
    host: 'localhost',
    database: '',
    username: '',
    password: '',
    port: 3306,
};
if (process.env.NODE_ENV === 'production') { // 生产环境
    INIT_CONFIG = {
        host: 'localhost',
        database: 'food_db',
        username: 'root',
        password: 'du6653145',
        port: 3306,
    };
}
else { // dev环境配置
    INIT_CONFIG = {
        host: '118.24.27.245',
        database: 'poster-test',
        username: 'test',
        password: 'akg1048.',
        port: 3306,
    };
}
const sequelize = new sequelize_1.Sequelize(INIT_CONFIG.database, INIT_CONFIG.username, INIT_CONFIG.password, {
    host: INIT_CONFIG.host,
    port: INIT_CONFIG.port,
    dialect: 'mysql'
});
exports.default = sequelize;
//# sourceMappingURL=query.js.map