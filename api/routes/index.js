const router = require('express').Router()

const { employeesRouter } = require('./employees.router')
const { authRouter } = require('./auth.router')

router
  //.use('/employees', employeesRouter)
  .use('/auth', authRouter)

exports.router = router