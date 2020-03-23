import { model, Schema } from 'mongoose'

const funcionarioSchema = Schema({
  Funcname: {
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

export default model('Funcionario', funcionarioSchema)
