import { Next, Context } from 'koa'

// Model
import Theme from '@/models/theme/theme.model'

export default class ThemesController {

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
            await Theme.findAndCountAll({
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
