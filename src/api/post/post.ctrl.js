import BaseResponse from '../../shared/base/response'
import { Post } from '../../shared/models'
import PostModel from './post.model'

class PostController extends BaseResponse {
  constructor() {
    super()
    this.Post = Post
  }

  async index(req, res, next) {
    try {
      const data = await this.Post.find()
      this.sendResponse(res, next, { status: 201, data })
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }

  async store(req, res, next) {
    try {
      const dataPosts = await PostModel.getPosts()
      const data = await this.Post.create(dataPosts)
      this.sendResponse(res, next, { status: 201, data })
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }
}

export default new PostController()
