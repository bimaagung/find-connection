const request = require('supertest')
const app = require('../../http/app')
const db = require('../../models')

describe('POST /user', () => {
  // beforeAll(async () => {
  //   await db.sequelize.sync({force: true})
  // })
  describe('user route', () => {
    it('responds with json', async () => {
      const response = await request(app)
        .post('/user')
        .send({email: 'bimaagungsetya@gmail.com'})
        .set('Accept', 'application/json')

      expect(response.status).toEqual(200)
    })
  })
  // Clear users table and close db connection
  // afterAll(async () => {
  //   await db.User.truncate()
  //   await db.sequelize.close()
  // })
})
