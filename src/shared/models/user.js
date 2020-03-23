import { model, Schema } from 'mongoose'

const userSchema = Schema({
  firstname: {
    type: String,
    lowercase: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
})

export default model('User', userSchema)
