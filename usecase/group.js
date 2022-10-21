class GroupUC {
  constructor(groupRepository) {
    this.groupRepository = groupRepository
  }

  async createGroup(group) {
    let group_by_name = await this.groupRepository.getGroupByName(group.name)

    //check if group already exists
    if (group_by_name !== null) {
      return null
    }

    return await this.groupRepository.createGroup(group)
  }
}

module.exports = GroupUC
