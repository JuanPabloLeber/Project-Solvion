const authRouter = require('express').Router()
const { checkAuth, checkTechnician, checkManager, checkCustomerService } = require('../../utils')

const {
  signup,
  login,
  whoami
} = require('../controllers/auth.controller')

authRouter.get('/whoami', checkAuth, checkManager, whoami)
authRouter.post('/signup', signup)
authRouter.post('/login', login)

exports.authRouter = authRouter
