import express from 'express'
import User from '../model/userModel.js'
import colors from 'colors'

const router = express.Router()

const fetchUsers = async (req, res, next) => {
  try {
    const users = await User.find({})
    req.users = users
    next()
  } catch (error) {
    console.log(`${error}`.red.inverse)
  }
}

const fetchUserById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id)
    if (user) {
      req.user = user
      next()
    } else res.send(`user with id: ${id} does not exist`)
  } catch (error) {
    console.log(`${error}`.red.inverse)
  }
}

router.param('id', fetchUserById)

router.get('/', fetchUsers, (req, res) => {
  res.send(req.users)
})

router.get('/:id', (req, res) => {
  res.send(req.user)
})

export default router
