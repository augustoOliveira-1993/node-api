import { Router } from 'express'

import user from './user'
import cliente from './cliente'
import funcionario from './funcionario'
import post from './post'
import githubuser from './githubuser'

const routes = Router()

routes.use('/user', user)
routes.use('/cliente', cliente)
routes.use('/funcionario', funcionario)
routes.use('/post', post)
routes.use('/githubuser', githubuser)

export default routes
