import BlogController from '@/controllers/blog/BlogController'
import {router} from '@/router'

const PREFIX = 'blog'

router.get(`/${PREFIX}/add`, BlogController.add)
router.get(`/${PREFIX}/info`, BlogController.info)

export default router