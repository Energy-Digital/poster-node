import LoginLogController from '@/controllers/loginlogs/LoginLogsController'
import {router} from '@/router'

const PREFIX = 'loginlogs'

router.get(`/${PREFIX}/data`, LoginLogController.data)

export default router