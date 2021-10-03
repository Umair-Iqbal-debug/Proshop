import express from 'express'
import apiRouter from './routes/apiRouter.js'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import colors from 'colors'
import { errorHandler, notFound } from './middlware/errorMiddleware.js'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

connectDB()

app.use(
  cors({
    origin: '*',
  })
)

app.get('/', (req, res) => {
  res.send('request recieved')
})
app.use('/api', apiRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(
    `Server listeningin ${process.env.NODE_ENV} modes on port ${PORT}`.yellow
      .bold
  )
})
