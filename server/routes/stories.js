import { Router } from 'express'

import { create, read } from '../controllers/stories.js'
import auth from '../middlewares/auth.js'
import upload from '../middlewares/upload.js'

const router = Router()

router.post('/', create)
router.get('/', read)

export default router