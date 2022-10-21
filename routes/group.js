const express = require('express')
const router = express.Router()

const groupController = require('../controller/group')

router.post('/create', groupController.createGroup)

module.exports = router
