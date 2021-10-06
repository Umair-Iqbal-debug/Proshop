import express from 'express'
const router = express.Router()
import {
  fetchProductById,
  fetchProducts,
} from '../controllers/productController.js'

router.route('/').get(fetchProducts)

router.route('/:id').get(fetchProductById)

export default router
