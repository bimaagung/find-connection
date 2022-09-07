const {User} = require('../models')

class UserRepository {
  constructor() {
    this.UserModel = User
  }

  async getUserByEmail(email) {
    throw new Error()
    return null
  }
}

module.exports = UserRepository
