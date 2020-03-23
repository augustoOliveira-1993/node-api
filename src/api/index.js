import { Router } from 'express'

import user from './user'
import cliente from './cliente'
import funcionario from './funcionario'

const routes = Router()

routes.use('/user', user)
routes.use('/cliente', cliente)
routes.use('/funcionario', funcionario)

export default routes
