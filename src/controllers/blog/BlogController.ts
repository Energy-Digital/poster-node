import initStone  from '@/utils/redis'
import query from '@/connect/query'
import { Next, Context } from 'koa'


export default class BlogController {

    static async add(ctx: Context, next: Next) {
        try {
            ctx.body = "Hi add blog";
        } catch (e) {
            ctx.response.body = e
        }
    }

    static async info(ctx: Context, next: Next) {
        const fakeInfo = {
                "data": {
                  "list": [{
                    "progress": 85,
                    "username": "桥本环奈",
                    "avatar": "https://c-ssl.duitang.com/uploads/item/201808/06/20180806032910_nkhwy.thumb.700_0.jpg",
                    "list": 2,
                    "title": "石原里美,你撕掉“甜美”标签的样子真美",
                    "id": 40739932321,
                    "status": "success",
                  }, {
                    "progress": 85,
                    "username": "石原里美",
                    "avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573286554105&di=8e2de13e44258c8f8661477e65ea9f07&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffashion%2Ftransform%2F20161027%2Fnw9e-fxxfyez2131828.png",
                    "list": 2,
                    "title": "有一种“惊艳”叫20岁的桥本环奈,长相不输任何人",
                    "id": 404353931111,
                    "status": "success",
                  }]
            }
        }
        try {
           const data = {
               ...fakeInfo
           }
           ctx.body = data
        }  catch(e) {
           console.log(e)
        }
      }
}
