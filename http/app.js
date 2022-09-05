require('dotenv').config()

const express = require('express')
var logger = require('morgan')

const app = express()

const UserRepository = require('../repository/user')
const UserUC = require('../usecase/user')

const userRouter = require('./routes/user')

const userUC = new UserUC(new UserRepository())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
  req.UserUC = userUC
  next()
})

app.get('/', (req, res) => {
  // #swagger.ignore = true
  res.send('Welcome Express')
})

app.use('/user', userRouter)

// documentation
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../docs/docs.json')

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app
