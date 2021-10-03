import express from 'express'
const router = express.Router()
import productRouter from './productRouter.js'
import userRouter from './userRouter.js'

router.use('/users', userRouter)
router.use('/products', productRouter)

export default router
