const UserUC = require('../../usecase/user')
const UserRepository = require('../../repository/user')

jest.mock('../../repository/user')

const userRepository = new UserRepository()
const userUC = new UserUC(userRepository)

test('test mock user partial class findByEmail', () => {
  const user = {
    id: '1',
    name: 'Bima',
    birth_date: '1996-12-13',
    email: 'bimaagungsetya@gmail.com',
    password: '12345678',
    createdAt: '1996-12-13',
    updatedAt: '1996-12-13',
  }

  userRepository.getUserByEmail.mockReturnValueOnce(user)

  expect(userUC.getUserByEmail('bimaagungsetya@gmail.com')).toEqual(user)
  expect(userRepository.getUserByEmail).toHaveBeenCalled()
  expect(userRepository.getUserByEmail).toHaveBeenCalledWith(
    'bimaagungsetya@gmail.com',
  )
})
