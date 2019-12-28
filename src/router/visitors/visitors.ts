import VisitorsController from '@/controllers/visitors/VisitorsController'
import {router} from '@/router'

const PREFIX = 'visitors'

router.get(`/${PREFIX}/data`, VisitorsController.data)

export default router