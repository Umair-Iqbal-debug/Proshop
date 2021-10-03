import express from 'express'
const router = express.Router()
import Product from '../model/productModel.js'
import colors from 'colors'

const fetchProducts = async (req, res, next) => {
  try {
    const products = await Product.find({})
    req.products = products
    next()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    next(error)
  }
}

const fetchProductById = async (req, res, next, id) => {
  try {
    const product = await Product.findById(id)
    if (product) {
      req.product = product
      next()
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  } catch (error) {
    console.log(`${error}`.red.inverse)
    next(error)
  }
}

router.param('id', fetchProductById)

//@desc   Fetch all products
//@route GET/api/products
//@acess Public
router.get('/', fetchProducts, (req, res) => {
  res.json(req.products)
})

//@desc   Fetch single product by id route param
//@route GET/api/products/:id
//@acess Public
router.get('/:id', (req, res) => {
  res.json(req.product)
})

export default router
