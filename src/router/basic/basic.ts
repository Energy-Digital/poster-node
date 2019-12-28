import BasicController from '@/controllers/basic/BasicController'
import {router} from '@/router'

const PREFIX = 'basic'

router.get(`/${PREFIX}/data`, BasicController.data)

export default router