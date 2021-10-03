import bycrptjs from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: bycrptjs.hashSync('admin123'),
    isAdmin: true,
  },
  {
    name: 'user1',
    email: 'user1@gmail.com',
    password: bycrptjs.hashSync('admin123'),
  },
  {
    name: 'user2',
    email: 'user2@gmail.com',
    password: bycrptjs.hashSync('admin123'),
  },
]

export default users
