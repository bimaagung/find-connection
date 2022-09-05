const {User} = require('../models')

class UserRepository {
  constructor() {
    this.UserModel = User
  }

  async getUserById(id) {
    let data = null
    try {
      data = await this.UserModel.findOne({where: {id}})
    } catch (err) {
      console.log(err)
      return null
    }

    return data
  }

  async getUserByEmail(email) {
    let data = null
    try {
      data = await this.UserModel.findOne({where: {email: email}})
    } catch (err) {
      console.log(err.message)
      return null
    }

    return data
  }

  async getUsers(filter) {
    let data = null

    if (filter != null) {
      return await this.UserModel.findAll({where: filter})
    }

    return await this.UserModel.findAll()
  }
}

module.exports = UserRepository
