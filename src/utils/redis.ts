import Redis from 'ioredis'
import { RedisConfigType } from '@/types/utils-typs'

let BaseConfig = {}
let initRedis = {}

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


const initStone = (config: RedisConfigType) => {
    BaseConfig = {
        ...initRedis,
        ...config,
    }
    return new Redis(BaseConfig)
}

export default initStone