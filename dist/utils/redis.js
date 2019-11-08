"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
let BaseConfig = {};
let initRedis = {};
if (process.env.NODE_ENV === 'dev') {
    initRedis = {
        port: 6379,
        host: '127.0.0.1',
        db: 0
    };
}
else {
    initRedis = {
        port: 6379,
        host: '127.0.0.1',
        db: 0
    };
}
const initStone = (config) => {
    BaseConfig = Object.assign(Object.assign({}, initRedis), config);
    return new ioredis_1.default(BaseConfig);
};
exports.default = initStone;
//# sourceMappingURL=redis.js.map