import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'USER' }
})

export default model('User', userSchema)