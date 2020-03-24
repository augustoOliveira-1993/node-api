import BaseResponse from '../../shared/base/response'
import { Funcionario } from '../../shared/models'

class FuncionarioController extends BaseResponse {
  constructor() {
    super()
    this.Funcionario = Funcionario
  }
  async index(req, res, next) {
    try {
      const data = await this.Funcionario.find()
      this.sendResponse(res, next, { status: 201, data })
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }
  async store(req, res, next) {
    try {
      const { Funcname, email, address } = req.body
      if (Funcname && email && address) {
        const data = await this.Funcionario.create({
          Funcname,
          email,
          address,
        })
        this.sendResponse(res, next, { status: 201, data })
      } else {
        this.sendError(res, next, {
          status: 401,
          messages: 'Error params on body',
        })
      }
    } catch (error) {
      this.sendError(res, next, { status: 401, messages: error.message })
    }
  }
  async deleteFuncionario(req, res, next) {
    const {
      params: { id },
    } = req
    if (id) {
      const funcionario = await this.Funcionario.findById(id)
      if (funcionario) {
        try {
          const data = await this.Funcionario.findByIdAndRemove(id)
          this.sendResponse(res, next, { status: 201, data })
        } catch (error) {
          this.sendError(res, next, {
            status: 402,
            messages: 'Error DELETE',
          })
        }
      } else {
        this.sendError(res, next, {
          message: 'SET ID PARAMS"',
          status: 402,
        })
      }
    }
  }
  async updateFuncionario(req, res, next){
    try {
      const {body} = req
      if(body){
        const params = {...body}

        delete params.id
        const data = await this.Funcionario.updateOne(
          {_id: body.id},
          {$set: params}
        )
        this.sendResponse(res, next, {
          status: 201,
          message: 'CLIENTE UPDATE',
          data,
        })
      }else{
        this.sendError(res, next, {
          status: 401,
          message: 'ERROR ON UPDATE CLIENTE',
        })
      }
    } catch (error) {
      this.sendError(res, next {
        status:401,
        message: `ERROR - ${error}`,
      })

    }
  }
}

export default new FuncionarioController()
