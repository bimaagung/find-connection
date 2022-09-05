const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
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
  console.log(req)

  let user = await req.UserUC.getUserByEmail(email)
  if (user === null) {
    return res.status(404).json(null)
  }

  res.json(user)
})

module.exports = router
