import BaseRouter from '../../shared/base/router'
import GithubuserCrontroller from './githubuser.ctrl'

class GithubuserRouter extends BaseRouter {
  constructor() {
    super()
    this.controller = GithubuserCrontroller
  }

  initialize() {
    this.get('/', GithubuserCrontroller.index)
    this.post('/', GithubuserCrontroller.store)
    this.delete('/:id', GithubuserCrontroller.delteGithubuser)
    this.put('/', GithubuserCrontroller.updateGithubuser)
  }
}

export default new GithubuserRouter().getRouter()
