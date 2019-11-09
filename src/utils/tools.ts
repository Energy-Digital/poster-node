import jwt from 'jsonwebtoken'
import formidable from 'formidable'
import utils from 'utility'

const secret = 'saltKey'

export function setToken(payload: {[key: string]: any}) {
    return jwt.sign(payload, secret, { expiresIn: '2h' })
}

export function checkToken(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err: Error, decoded: {[key: string]: any}) => {
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

export function md5Pwd(salt: string, pwd: string){
  return utils.md5(utils.md5(pwd + salt))
}


