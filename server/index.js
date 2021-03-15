import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import usersRouter from './routes/users.js'
import storiesRouter from './routes/stories.js'

dotenv.config()

const PORT = process.env.PORT || 5000
const DB_URL = process.env.DB_URL

const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'))

app.use('/api/users', usersRouter)
app.use('/api/stories', storiesRouter)

const start = async () => {
  try {
    await mongoose.connect(DB_URL, dbConfig).then(() => console.log('MongoDB connected'))
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()