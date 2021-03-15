import mongoose from 'mongoose'

const { Schema, model } = mongoose

const postSchema = new Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  tags: { type: [ String ]},
  text: { type: [ String ]},
  img: { type: [ String ]}
})

export default model('Post', postSchema)