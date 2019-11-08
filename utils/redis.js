const Redis = require('ioredis')

let BaseConfig = {}

if (process.env.NODE_ENV === 'dev') {
    initRedis = {
        port: 6379,
        host: '127.0.0.1',
        db: 0
    }
} else {
     initRedis = {
        port: 6379,
        host: '127.0.0.1',
        db: 0
    }
}


const initStone = (config) => {
    BaseConfig = {
        ...initRedis,
        ...config,
    }
    return new Redis(BaseConfig)
}

module.exports = initStone