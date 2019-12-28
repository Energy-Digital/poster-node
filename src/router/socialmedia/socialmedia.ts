import SMController from '@/controllers/socialmedia/SMController'
import {router} from '@/router'

const PREFIX = 'sm'

router.get(`/${PREFIX}/data`, SMController.data)

export default router