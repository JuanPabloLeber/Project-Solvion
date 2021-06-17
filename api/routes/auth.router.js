const authRouter = require('express').Router()
const { checkAuth, checkTechnician, checkManager, checkCustomerService } = require('../../utils')

const {
  login,
  whoami
} = require('../controllers/auth.controller')

authRouter.get('/whoami', checkAuth, whoami)

authRouter.post('/login', login)

exports.authRouter = authRouter
