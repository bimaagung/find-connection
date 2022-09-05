class User {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async getUserByEmail(email) {
    let user = await this.userRepository.getUserByEmail(email)
    return user
  }

  async createUser(users) {
    let user = await this.userRepository.createUser(users)
    return user
  }
}

module.exports = User
