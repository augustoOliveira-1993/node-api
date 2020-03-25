import { model, Schema } from 'mongoose'

const postSchema = Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  title: String,
  body: String,
})

export default model('Post', postSchema)
