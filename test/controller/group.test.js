const sinon = require('sinon')
const {expect} = require('chai')
const GroupUC = require('../../usecase/group')
const GroupRepository = require('../../repository/group')
const GroupController = require('../../controller/group')
const res = require('../../helper/res-test')

const groupRepo = new GroupRepository()
const groupUC = new GroupUC(groupRepo)

const group = {
  id: 1,
  name: 'Bima',
  desciption: 'Group untuk belajar nodejs',
  createdAt: '2022-09-03 00:00:00',
  updatedAt: '2022-09-03 00:00:00',
  user: {
    name: 'Bima Agung',
  },
  role: [
    {name: 'nodejs'},
    {name: 'sequelize'},
    {name: 'postgresql'},
    {name: 'express'},
  ],
}

describe('GET ./group/create', () => {
  let req = {
    body: {
      name: 'Coding Nodejs',
      description: 'Group untuk belajar node js',
      user_id: 1,
    },
    GroupUC: groupUC,
  }

  afterEach(() => {
    groupRepo.getGroupByName.restore()
    groupRepo.createGroup.restore()
  })

  it('return with statusCode = 200 and type object true', async () => {
    sinon.stub(groupRepo, 'getGroupByName').resolves(null)
    sinon.stub(groupRepo, 'createGroup').resolves(group)

    const groupResponse = await GroupController.createGroup(req, res)

    expect(groupResponse.statusCode).to.be.equal(200)
    expect(groupResponse.dataValues.data).to.be.equal(group)
  })

  it('return with statusCode = 400 and message = group already exists', async () => {
    sinon.stub(groupRepo, 'getGroupByName').resolves(group)
    sinon.stub(groupRepo, 'createGroup').resolves(group)

    const groupResponse = await GroupController.createGroup(req, res)

    expect(groupResponse.statusCode).to.be.equal(400)
    expect(groupResponse.dataValues.message).to.be.equal('group already exists')
  })
})
