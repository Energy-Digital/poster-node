import CatesController from '@/controllers/cates/CatesController'
import {router} from '@/router'

const PREFIX = 'cates'

router.get(`/${PREFIX}/data`, CatesController.data)

export default router