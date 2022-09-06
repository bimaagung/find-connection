const express = require('express')
const router = express.Router()

const userController = require('../controller/user')

router.post('/get-by-email', userController.getUserByEmail)
router.post('/add', userController.addUser)
router.put('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)

module.exports = router
