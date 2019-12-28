import AssetsController from '@/controllers/assets/AssetsController'
import {router} from '@/router'

const PREFIX = 'assets'

router.get(`/${PREFIX}/data`, AssetsController.data)

export default router