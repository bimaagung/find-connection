const sinon = require('sinon')
const {expect} = require('chai')
const userUC = require('../../usecase/user')
const UserRepository = require('../../repository/user')

const userRepo = new UserRepository()

const execute = {
  id: 1,
  name: 'Bima',
  birth_date: '1996-12-13 00:00:00',
  email: 'bimaagungsetya@gmail.com',
  password: '12345678',
  createdAt: '2022-09-03 00:00:00',
  updatedAt: '2022-09-03 00:00:00',
}

describe('UserByEmail', () => {
  after(() => {
    userRepo.getUserByEmail.restore()
  })

  it('should return a object with true', async () => {
    let stub = sinon.stub(userRepo, 'getUserByEmail').resolves(execute)
    const response = await new userUC(userRepo).getUserByEmail(
      'bimaagungsetya@gmail.com',
    )

    sinon.assert.calledOnce(stub)
    expect(response).to.be.a('object')
    expect(response).to.have.a.property('id')
    expect(response).to.have.a.property('name')
  })
})
