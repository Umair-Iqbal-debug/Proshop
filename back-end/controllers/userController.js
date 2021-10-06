import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'
import generateToken from '../utils/generateToken.js'

//@desc   Auth user & get token
//@route POST/api/users/login
//@acess Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  const { _id, name, isAdmin } = user

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id,
      name,
      email,
      isAdmin,
      token: generateToken(_id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid Email or Password')
  }
})

//@desc   GET user profile
//@route GET/api/users/profile
//@acess Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = req.user
  const { _id, name, email, isAdmin } = user
  if (user) {
    res.json({
      _id,
      name,
      email,
      isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
