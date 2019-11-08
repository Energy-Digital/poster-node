import jwt from 'jsonwebtoken'
import formidable from 'formidable'
const secret = 'saltKey'

class Util {
    static setToken(payload: {[key: string]: any}) {
        return jwt.sign(payload, secret, { expiresIn: '2h' })
    }

    static checkToken(token: string) {
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

    static handleCookie(cookie: string) {
       const getCookie = cookie.split(';')
       const newObj: {[key: string]: any} = {}
       getCookie.forEach((item) => {
            const objKey = item.split('=')[0].trim()
            const objRes = item.split('=')[1]
            newObj[objKey] = objRes
        })
        return newObj
    }

    static async treamentFormData(data: any){
      return new Promise((resolve, reject) => {
        const form = new formidable.IncomingForm()
        form.parse(data, async(err: Error, fields: any, files: any) => {
            if(err){reject(err)}
            resolve(fields)
        });
      })
    }
}

export default Util


