const router = require('express').Router()

const { employeesRouter } = require('./employees.router')
const { authRouter } = require('./auth.router')
const { clientsRouter } = require('./clients.router')

router
  .use('/employees', employeesRouter)
  .use('/auth', authRouter)
  .use('/client', clientsRouter)

exports.router = router