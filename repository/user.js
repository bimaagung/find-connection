const {User} = require('../models')

class UserRepository {
  constructor() {
    this.UserModel = User
  }

  async getAllUser(filter) {
    let data = null

    if (filter != null) {
      return await this.UserModel.findAll({where: filter})
    }

    return await this.UserModel.findAll()
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

  async createUser(user) {
    let data = null
    try {
      data = await this.UserModel.create(user)
    } catch (err) {
      console.log(err.message)
      return null
    }
    return data
  }

  async updateUser(id, user) {
    let data = null
    try {
      data = await this.UserModel.update(
        {name: user.name, name: user.birth_date},
        {where: {id: id}},
      )
    } catch (err) {
      console.log(err.message)
      return null
    }
    return data
  }

  async deleteUser(id) {
    let data = null
    try {
      data = await this.UserModel.destroy({where: {id: id}})
    } catch (err) {
      console.log(err.message)
      return null
    }
    return data
  }
}

module.exports = UserRepository
