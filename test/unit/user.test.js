const UserUC = require('../../usecase/user')
const UserRepository = require('../../repository/user')

jest.mock('../../repository/user')

const userRepository = new UserRepository()
const userUC = new UserUC(userRepository)

test('test mock user class findByEmail', async () => {
   const user = {
        id: 1,
        name: 'Bima',
        birth_date: '1996-12-12T17:00:00.000Z',
        email: 'bimaagungsetya@gmail.com',
        password: '12345678',
        createdAt: '2022-09-05T04:45:17.347Z',
        updatedAt: '2022-09-05T04:45:17.347Z',
      }

  userRepository.getUserByEmail.mockReturnValueOnce(user)

  expect(await userUC.getUserByEmail('bimaagungsetya@gmail.com')).toEqual(user)
  expect(userRepository.getUserByEmail).toHaveBeenCalled()
  expect(userRepository.getUserByEmail).toHaveBeenCalledWith(
    'bimaagungsetya@gmail.com',
  )
})

test('test mock user class createUser', async () => {
   const user = {
        name: 'Bima',
        birth_date: '1996-12-12T17:00:00.000Z',
        email: 'bimaagungsetya@gmail.com',
        password: '12345678',
      }

  await userUC.createUser(user)

  expect(userRepository.createUser).toHaveBeenCalled()
  expect(userRepository.createUser).toHaveBeenCalledWith(user)
})