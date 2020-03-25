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
}

export default new GithubuserController()
