import mongoose from 'mongoose'

const { Schema, model } = mongoose

const storySchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  media: { type: String, required: true },
  type: { type: String, required: true }
})

export default model('Story', storySchema)