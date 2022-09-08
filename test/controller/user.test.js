const sinon = require('sinon')
const {expect} = require('chai')
const UserUC = require('../../usecase/user')
const UserRepository = require('../../repository/user')
const UserController = require('../../controller/user')
const res = require('../../helper/res-test')

const userRepo = new UserRepository()
const userUC = new UserUC(userRepo)

const user = {
  id: 1,
  name: 'Bima',
  birth_date: '1996-12-13 00:00:00',
  email: 'bimaagungsetya@gmail.com',
  password: '12345678',
  createdAt: '2022-09-03 00:00:00',
  updatedAt: '2022-09-03 00:00:00',
}

describe('GET ./user/get_by_email', () => {
  afterEach(() => {
    userRepo.getUserByEmail.restore()
  })

  it('should return with statusCode = 200 and type object true', async () => {
    let req = {
      body: {email: 'bimaagungsetya@gmail.com'},
      UserUC: userUC,
    }

    const execute = user
    let stub = sinon.stub(userRepo, 'getUserByEmail').resolves(execute)

    const userResponse = await UserController.getUserByEmail(req, res)

    sinon.assert.calledOnce(stub)
    expect(userResponse).to.be.a('object')
    expect(userResponse.statusCode).to.be.equal(200)
  })

  it('should return with statusCode = 404 and type object false', async () => {
    let req = {
      body: {email: 'bimaagungsetya@gmail.com'},
      UserUC: userUC,
    }

    const execute = null
    let stub = sinon.stub(userRepo, 'getUserByEmail').resolves(execute)

    const userResponse = await UserController.getUserByEmail(req, res)

    sinon.assert.calledOnce(stub)
    expect(userResponse).to.be.a('object')
    expect(userResponse.statusCode).to.be.equal(404)
  })
})
