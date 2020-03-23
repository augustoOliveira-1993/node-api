import BaseResponse from '../../shared/base/response'
import { Cliente } from '../../shared/models'

class ClienteController extends BaseResponse {
  constructor() {
    super()
    this.Cliente = Cliente
  }
  async index(req, res, next) {
    try {
      const data = await this.Cliente.find()
      this.sendResponse(res, next, { status: 201, data })
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }
  async store(req, res, next) {
    try {
      const { name, email, address } = req.body
      if (name && email && address) {
        const data = await this.Cliente.create({
          name,
          email,
          address,
        })
        this.sendResponse(res, next, { status: 201, data })
      } else {
        this.sendError(res, next, {
          status: 402,
          messages: 'Error params on body',
        })
      }
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }
  async deleteCliente(req, res, next) {
    const {
      params: { id },
    } = req
    if (id) {
      const cliente = await this.Cliente.findById(id)
      if (cliente) {
        try {
          const data = await this.Cliente.findByIdAndRemove(id)
          this.sendResponse(res, next, { status: 201, data })
        } catch (error) {
          this.sendError(res, next, {
            status: 402,
            messages: 'Error DELETE',
          })
        }
      } else {
        this.sendError(res, next, {
          message: 'set id params',
          status: 402,
        })
      }
    }
  }
  async updateCliente(req, res, next) {
    try {
      const { body } = req
      if (body) {
        const params = { ...body }

        delete params.id
        const data = await this.Cliente.updateOne(
          { _id: body.id },
          { $set: params }
        )
        this.sendResponse(res, next, {
          status: 201,
          message: 'CLIENTE UPDATE',
          data,
        })
      } else {
        this.sendError(res, next, {
          status: 401,
          message: 'ERROR ON UPDATE CLIENTE',
        })
      }
    } catch (error) {
      this.sendError(res, next, {
        status: 401,
        message: `ERROR - ${error}`,
      })
    }
  }
}

export default new ClienteController()
