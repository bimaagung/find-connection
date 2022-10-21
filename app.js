require('dotenv').config()

const express = require('express')
var logger = require('morgan')
const passport = require('./lib/passport')

const app = express()

const UserRepository = require('./repository/user')
const GroupRepository = require('./repository/group')

const UserUC = require('./usecase/user')
const GroupUC = require('./usecase/group')

const userRouter = require('./routes/user')
const groupRouter = require('./routes/group')
const authRouter = require('./routes/auth')

const userUC = new UserUC(new UserRepository())
const groupUC = new GroupUC(new GroupRepository())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
  req.UserUC = userUC
  req.GroupUC = groupUC
  next()
})

app.use(passport.initialize())

app.get('/', (req, res) => {
  // #swagger.ignore = true
  res.send('Welcome Express')
})

app.use('/user', userRouter)
app.use('/group', groupRouter)
app.use('/auth', authRouter)

// documentation
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/docs.json')

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app
