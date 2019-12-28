import { Next, Context } from 'koa'

// Model
import LoginLog from '@/models/loginlog/loginlog.model'

export default class LoginLogsController {

    /*static async add(ctx: Context, next: Next) {
        try {
            ctx.body = "Hi add blog";
        } catch (e) {
            ctx.response.body = e
        }
    }*/

    static async data(ctx: Context, next: Next) {

        let rData: Object = {};
        
        try {

            // Query Database
            await LoginLog.findAll({
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
