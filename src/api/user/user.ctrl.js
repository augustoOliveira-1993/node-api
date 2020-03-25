import BaseResponse from '../../shared/base/response'
import { User } from '../../shared/models'

class UserController extends BaseResponse {
  constructor() {
    super()
    this.User = User
  }

  async index(req, res, next) {
    try {
      const data = await this.User.find()
      this.sendResponse(res, next, { status: 201, data })
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }

  async store(req, res, next) {
    try {
      const { usename, email, nickname, password } = req.body
      if (usename && email && nickname && password) {
        const data = await this.User.create({
          usename,
          email,
          nickname,
          password,
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

  async deleteUser(req, res, next) {
    const {
      params: { id },
    } = req
    if (id) {
      const user = await this.User.findById(id)
      if (user) {
        try {
          const data = await this.User.findByIdAndRemove({ _id: id })
          this.sendResponse(res, next, { status: 201, data })
        } catch (error) {
          this.sendError(res, next, {
            status: 402,
            messages: 'Error DELETE',
          })
        }
      } else {
        this.sendError(res, next, {
          message: 'SET ID PARAMS!',
          status: 402,
        })
      }
    }
  }
  async updateUser(req, res, next) {
    try {
      const { body } = req
      if (body) {
        const params = { ...body }

        delete params.id
        const data = await this.User.updateOne(
          { _id: body.id },
          { $set: params }
        )
        this.sendResponse(res, next, {
          status: 201,
          message: 'USER UPDATE',
          data,
        })
      } else {
        this.sendError(res, next, {
          status: 401,
          message: 'ERROR ON UPDATE USER',
        })
      }
    } catch (error) {
      this.sendError(res, next, { status: 401, message: `ERROR - ${error}` })
    }
  }
}

export default new UserController()
