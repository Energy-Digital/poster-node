import NavsController from '@/controllers/navs/NavsController'
import {router} from '@/router'

const PREFIX = 'navs'

router.get(`/${PREFIX}/data`, NavsController.data)

export default router