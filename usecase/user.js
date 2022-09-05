class User {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async getUserByEmail(email) {
    return await this.userRepository.getUserByEmail(email)
  }
}

module.exports = User
