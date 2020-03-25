import request from 'request'

import { api } from '../../shared/constants/apis'

class PostModel {
  constructor() {
    this.url = api.TYPICODE
  }

  async getPosts() {
    return new Promise((resolve, reject) => {
      request.get(`${this.url}/posts`, (error, response, data) => {
        if (error) return reject(response)
        resolve(JSON.parse(data))
      })
    })
  }
}

export default new PostModel()
