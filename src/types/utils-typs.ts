export interface CookieConfigType {
    expires: number,      //过期时间，unix时间戳
    maxAge:  number,       //cookie有效时长，单位：毫秒数
    path: string,         //cookie保存路径, 默认是'/，set时更改，get时同时修改，不然会保存不上，服务同时也获取不到
    domain: string,       //cookie可用域名，“.”开头支持顶级域名下的所有子域名
    secure: boolean,       //默认false，设置成true表示只有https可以访问
    httpOnly: boolean,     //true，客户端不可读取
    overwrite: boolean, 
}

export interface RedisConfigType {
    port: number,
    host: string,
    db: number
}

export interface MysqlQueryType {
    host: string,
    database: string,
    username: string,
    password: string,
    port: number
}

export interface UserInfoType {
    username: string
    password: string
}