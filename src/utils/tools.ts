import jwt from 'jsonwebtoken'
import formidable from 'formidable'
import utils from 'utility'
import { UserInfoType } from '@/types/utils-typs'
import { PASSWORDSALT, SETSESSIONTOKENSALT, JWTSALT } from './variable'

export function setSessionToken(info: UserInfoType) {
  const mixString = info.password + info.username
  return utils.md5(utils.md5(mixString + SETSESSIONTOKENSALT))
}

export function setToken(payload: {[key: string]: any}) {
    return jwt.sign(payload, JWTSALT, { expiresIn: '2h' })
}

export function checkToken(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWTSALT, (err: Error, decoded: {[key: string]: any}) => {
      if (err) {
        reject(err)
        return
      }
      resolve(decoded)
    })
  })
}


export function handleCookie(cookie: string) {
    const getCookie = cookie.split(';')
    const newObj: {[key: string]: any} = {}
    getCookie.forEach((item) => {
        const objKey = item.split('=')[0].trim()
        const objRes = item.split('=')[1]
        newObj[objKey] = objRes
    })
    return newObj
}

export async function treamentFormData(data: any){
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm()
    form.parse(data, async(err: Error, fields: any, files: any) => {
        if(err){reject(err)}
        resolve(fields)
    });
  })
}

export function md5Pwd(pwd: string){
  return utils.md5(utils.md5(pwd + PASSWORDSALT))
}

interface objType {
  [key: string]: any
}

export function filterforObj(obj:objType ,key: string[]) {
    const okey = key // ['pws', 'fff']
    let temp: objType = {}
    for (const [k, v] of Object.entries(obj)) {
        if (!okey.includes(k)) {
          temp[k] = v
        }
    }
    return temp
}

export function WrapResponse(data: any = {}, code = 0, msg = '操作成功') {
    const Cb = {
        msg: msg,
        data: data,
        code: code
    }
    return {
       ...Cb
    }
}


