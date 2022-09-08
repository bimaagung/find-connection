const resData = require('../helper/reponse')

module.exports = {
  getUserByEmail: async (req, res) => {
    /*
      #swagger.summary = "Get User By Email"
      #swagger.description = 'Get User By Email'
      #swagger.tags = ['User']
      #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            email: {
                                type: "string"
                            }
                        },
                    }
                },
            }
        } 
      #swagger.responses[200] = {
          description: "Item found.",
          schema: [{$ref: '#definitions/User'}]
      }
      #swagger.responses[400] = {
          description: "Item not found.",
          schema: null
      }
    */

    let email = req.body['email']

    let user = await req.UserUC.getUserByEmail(email)
    if (user === null) {
      return res.status(404).json(resData.failed('User not found'))
    }

    return res.status(200).json(user)
  },

  addUser: async (req, res) => {
    let user_req = req.body

    let user = await req.UserUC.createUser(user_req)

    res.json(user)
  },

  updateUser: async (req, res) => {
    let id = req.params.id
    let user_req = req.body

    let user = await req.UserUC.updateUser(id, user_req)

    if (user === null) {
      return res.status(404).json(resData.failed('User not found'))
    }

    res.json(user)
  },

  deleteUser: async (req, res) => {
    let id = req.params.id

    let user = await req.UserUC.deleteUser(id)

    if (user === null) {
      return res.status(404).json(resData.failed('User not found'))
    }

    res.json(user)
  },
}
