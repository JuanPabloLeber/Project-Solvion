const authRouter = require('express').Router()
const { checkAuth, checkCustomerServiceOrManagerOrTechnician} = require('../../utils')

const {
  login,
  profile
} = require('../controllers/auth.controller')

authRouter.get('/whoami', checkAuth, checkCustomerServiceOrManagerOrTechnician, profile)

authRouter.post('/login', login)

exports.authRouter = authRouter
