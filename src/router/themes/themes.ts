import ThemesController from '@/controllers/themes/ThemesController'
import {router} from '@/router'

const PREFIX = 'themes'

router.get(`/${PREFIX}/data`, ThemesController.data)

export default router