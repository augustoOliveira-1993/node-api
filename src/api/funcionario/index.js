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
    this.delete('/', FuncionarioController.deleteFuncionario)
    this.post('/', FuncionarioController.updateFuncionario)
  }
}

export default new FuncionarioRouter().getRouter()
