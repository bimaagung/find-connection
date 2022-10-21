const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app')

chai.use(chaiHttp)
chai.should()

describe('POST /user/get_by_email', () => {
  it('should return user with status code 200', (done) => {
    chai
      .request(app)
      .post('/user/get-by-email')
      .send({email: 'bimaagungsetya@gmail.com'})
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })
  
  it('should return user with status code 404 not found', (done) => {
    chai
      .request(app)
      .post('/user/get-by-email')
      .send({email: 'bima@gmail.com'})
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(404)
        res.body.should.be.a('object')
        done()
      })
  })
})
