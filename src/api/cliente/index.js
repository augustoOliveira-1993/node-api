import BaseRouter from '../../shared/base/router'
import ClienteController from './cliente.ctrl'

class ClienteRouter extends BaseRouter {
  constructor() {
    super()
    this.controller = ClienteController
  }

  initialize() {
    this.get('/', ClienteController.index)
    this.post('/', ClienteController.store)
    this.delete('/', ClienteController.deleteCliente)
    this.put('/', ClienteController.updateCliente)
  }
}

export default new ClienteRouter().getRouter()
