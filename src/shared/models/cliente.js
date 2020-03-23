import { model, Schema } from 'mongoose'

const clienteSchema = Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: false,
  },
})

export default model('Cliente', clienteSchema)
