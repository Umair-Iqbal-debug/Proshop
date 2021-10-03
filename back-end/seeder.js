import mongoose from 'mongoose'
import connectDB from './config/db.js'

import products from './data/product.js'
import users from './data/users.js'

import Product from './model/productModel.js'
import User from './model/userModel.js'
import Order from './model/orderModel.js'

import dotenv from 'dotenv'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminId = createdUsers[0]._id
    const sampleProducts = products.map(product => {
      return {
        ...product,
        user: adminId,
      }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data imported'.green.inverse)
  } catch (error) {
    console.log(`${error}`.red.inverse)
  }
  process.exit(1)
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed'.green.inverse)
  } catch (error) {
    console.log(`${error}`.red.inverse)
  }
  process.exit(1)
}

const choice = process.argv[2]

if (choice == '-d') destroyData()
else importData()
