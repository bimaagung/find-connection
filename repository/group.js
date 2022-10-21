const {Group} = require('../models')

class GroupRepository {
  constructor() {
    this.GroupModel = Group
  }

  async createGroup(group) {
    let data = await this.GroupModel.create(group)
    return data
  }

  async getGroupByName(name) {
    let data = await this.GroupModel.findOne({where: {name: name}})
    return data
  }
}

module.exports = GroupRepository
