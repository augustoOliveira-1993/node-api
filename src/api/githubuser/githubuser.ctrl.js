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
    try {
      const dataGithubuser = await GithubuserModel.getGithubuser()
      //console.log(dataGithubuser)
      const data = await this.Githubuser.create(dataGithubuser)
      this.sendResponse(res, next, { status: 201, data })
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }
}

export default new GithubuserController()
