import BaseRouter from '../../shared/base/router'
import FuncionarioController from './funcionario.ctrl'

class FuncionarioRouter extends BaseRouter {
  constructor() {
    super()
    this.controller = FuncionarioController
  }
  initialize() {
    this.get('/', FuncionarioController.index)
    this.post('/', FuncionarioController.store)
  }
}

export default new FuncionarioRouter().getRouter()
