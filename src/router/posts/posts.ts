import PostsController from '@/controllers/posts/PostsController'
import {router} from '@/router'

const PREFIX = 'posts'

router.get(`/${PREFIX}/data`, PostsController.data)

export default router