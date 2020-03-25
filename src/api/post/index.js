import BaseRouter from '../../shared/base/router'
import PostCrontroller from './post.ctrl'

class PostRouter extends BaseRouter {
  constructor() {
    super()
    this.controller = PostCrontroller
  }

  initialize() {
    this.get('/', PostCrontroller.index)
    this.post('/', PostCrontroller.store)
  }
}

export default new PostRouter().getRouter()
