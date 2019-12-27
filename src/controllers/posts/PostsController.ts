import initStone  from '@/utils/redis'
import query from '@/connect/query'
import { Next, Context } from 'koa'

// Model
import Post from '@/models/post/post.model'

export default class PostsController {

    /*static async add(ctx: Context, next: Next) {
        try {
            ctx.body = "Hi add blog";
        } catch (e) {
            ctx.response.body = e
        }
    }*/

    static async data(ctx: Context, next: Next) {
        var rData;
        try {

            // Query Database
            await Post.findAndCountAll({
                //attributes:["name", "name_sublang"]
            }).then(res => {

                rData = res

            }).catch(err => {

                console.log(err)

            });

            // Print data
            ctx.body = {
                code: 0,
                msg: 'success',
                data: rData
            }

           
        }  catch(e) {
           console.log(e)
        }
      }
}
