const UserUC = require('./usecase/user')
const UserRepository = require('./repository/user')

const userRepository = new UserRepository()
const userUC = new UserUC(userRepository)

console.log(
  userUC.getUserByEmail('bimaagungsetya@gmail.com').then((result) => {
    console.log(result)
  }),
)
