const authRouter = require('express').Router()
const { checkAuth, checkCustomerServiceOrManagerOrTechnician} = require('../../utils')

const {
  login,
  whoami
} = require('../controllers/auth.controller')

authRouter.get('/whoami', checkAuth, checkCustomerServiceOrManagerOrTechnician, whoami)

authRouter.post('/login', login)

exports.authRouter = authRouter
