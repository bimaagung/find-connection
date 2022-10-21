const bcyrpt = require('bcrypt')
const resData = require('../helper/reponse')

module.exports = {
  register: async (req, res) => {
    let user_req = req.body

    let encryptPassword = bcyrpt.hashSync(user_req.password, 10)
    user_req.password = encryptPassword

    const user_register = await req.UserUC.createUser(user_req)

    if (!user_register) {
      return res.status(400).json(resData.failed('user already exists'))
    }

    delete user_req['password']
    return res.status(200).json(resData.success(user_req))
  },

  login: async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await req.UserUC.validationLoginUser(email, password)

    if (!user) {
      return res.status(400).json(resData.failed('email and password is wrong'))
    }

    return res.json({
      status: 'ok',
      message: 'success',
      accessToken: user,
    })
  },
}
