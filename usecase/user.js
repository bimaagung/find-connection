const bcyrpt = require('bcrypt')
const jwt = require('jsonwebtoken')

class User {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async getUserByEmail(email) {
    let user = await this.userRepository.getUserByEmail(email)

    return user
  }

  async createUser(user_req) {
    // check validation if user already exists
    let userById = await this.userRepository.getUserByEmail(user_req.email)

    if (userById !== null) return null

    let user = await this.userRepository.createUser(user_req)

    return user
  }

  async updateUser(id, user_req) {
    let user = await this.userRepository.updateUser(id, user_req)
    return user
  }

  async deleteUser(id) {
    let user = await this.userRepository.deleteUser(id)
    return user
  }

  async validationLoginUser(email, password) {
    const user = await this.getUserByEmail(email)

    if (!user) {
      return null
    }

    const isPasswordValid = bcyrpt.compareSync(password, user.password)

    if (!isPasswordValid) {
      return null
    }

    const accessToken = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      process.env.JWT_SECRET,
    )

    return accessToken
  }
}

module.exports = User
