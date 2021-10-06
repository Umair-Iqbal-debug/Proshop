import Product from '../model/productModel.js'
import colors from 'colors'
import asyncHandler from 'express-async-handler'

//@desc   Fetch all products
//@route GET/api/products
//@acess Public
export const fetchProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  req.products = products
  res.json(products)
})

//@desc   Fetch single product by id route param
//@route GET/api/products/:id
//@acess Public
export const fetchProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) res.json(product)
  else {
    res.status(404)
    throw new Error('Product not found')
  }
})
