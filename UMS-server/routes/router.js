const express = require('express')
const loginController = require('../controller/loginController')
const { addUserController, getUsersController, getSingleUserController, updateUserController } = require('../controller/allUserController')

const router = new express.Router()
// login
router.post('/login',loginController.loginController)
// addUser
router.post('/addUser',addUserController)
// getusers
router.get('/allUsers',getUsersController)

router.get('/user/:id',getSingleUserController)

router.put('/userupdate/:id',updateUserController)

module.exports = router;