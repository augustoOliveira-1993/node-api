import request from 'request'

import { api } from '../../shared/constants/apis'

class GithubuserModel {
  constructor() {
    this.url = api.GITHUB_API
  }

  async getGithubuser() {
    const options = {
      host: 'api.github.com',
      path: `${this.url}/users`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
    }

    return new Promise((resolve, reject) => {
      request.get(`${this.url}/users`, options, (error, response, data) => {
        if (error) return reject(response)
        resolve(JSON.parse(data))
      })
    })
  }
}

export default new GithubuserModel()
