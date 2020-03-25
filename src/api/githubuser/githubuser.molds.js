import request from 'request'

import { api } from '../../shared/constants/apis'

class GithubuserModel {
  constructor() {
    this.url = api.GITHUB_API
  }

  async getGithubusers() {
    const options = {
      host: this.url,
      path: `${this.url}/users`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
    }

    return new Promise((resolve, reject) => {
      request.get(options.path, options, (error, response, data) => {
        if (error) return reject(response)
        resolve(JSON.parse(data))
      })
    })
  }

  async getGithubuser(username) {
    const options = {
      host: this.url,
      path: `${this.url}/users/${username}`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
    }

    return new Promise((resolve, reject) => {
      request.get(options.path, options, (error, response, data) => {
        if (error) return reject(response)
        resolve(JSON.parse(data))
      })
    })
  }
}

export default new GithubuserModel()
