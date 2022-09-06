const request = require('supertest')
const app = require('../../app')
const db = require('../../models')

describe('POST /user', () => {
  beforeAll(async () => {
    await db.sequelize.sync({force: true})
  })
  describe('user route', () => {
    it('responds route post /user/add with responseCode 200', async () => {
      const user = {
        name: 'Bima',
        birth_date: '1996/12/12',
        email: 'bimaagungsetya@gmail.com',
        password: '12345678',
      }

      const response = await request(app)
        .post('/user/add')
        .send(user)
        .set('Accept', 'application/json')

      expect(response.status).toEqual(200)
    })

    it('responds route post /user with result true', async () => {
      const user = {
        id: 1,
        name: 'Bima',
        birth_date: '1996-12-12T17:00:00.000Z',
        email: 'bimaagungsetya@gmail.com',
        password: '12345678',
        createdAt: '2022-09-05T04:45:17.347Z',
        updatedAt: '2022-09-05T04:45:17.347Z',
      }

      const response = await request(app)
        .post('/user')
        .send({email: 'bimaagungsetya@gmail.com'})
        .set('Accept', 'application/json')

      expect(response.status).toEqual(200)
      expect(response.body).toEqual(user)
    })
  })
  // Clear users table and close db connection
  afterAll(async () => {
    await db.User.truncate()
    await db.sequelize.close()
  })
})
