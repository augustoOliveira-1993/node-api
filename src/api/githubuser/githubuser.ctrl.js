import BaseResponse from '../../shared/base/response'
import { Githubuser } from '../../shared/models'
import GithubuserModel from './githubuser.molds'

class GithubuserController extends BaseResponse {
  constructor() {
    super()
    this.Githubuser = Githubuser
  }

  async index(req, res, next) {
    try {
      const data = await this.Githubuser.find()
      console.log(data)
      this.sendResponse(res, next, { status: 201, data })
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }

  async store(req, res, next) {
    const { username } = req.body
    let dataGithubuser = ''

    try {
      if (username) {
        dataGithubuser = await GithubuserModel.getGithubuser(username)
      } else {
        dataGithubuser = await GithubuserModel.getGithubusers()
      }
      //console.log(dataGithubuser)
      const data = await this.Githubuser.create(dataGithubuser)
      this.sendResponse(res, next, { status: 201, data })
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }

  async delteGithubuser(req, res, next) {
    const {
      params: { id },
    } = req
    if (id) {
      const githubuser = await this.Githubuser.findById(id)
      if (githubuser) {
        try {
          const data = await this.Githubuser.findByIdAndRemove({ _id: id })
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
  async updateGithubuser(req, res, next) {
    try {
      const { body } = req
      if (body) {
        const params = { ...body }

        delete params.id
        const data = await this.Githubuser.updateOne(
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

export default new GithubuserController()
