class User {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async getUserByEmail(email) {
    let user = await this.userRepository.getUserByEmail(email)

    return user
  }

  async createUser(user_req) {
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
}

module.exports = User
