const router = require('express').Router()

const { employeesRouter } = require('./employees.router')
const { authRouter } = require('./auth.router')
const { incidenceCategoriesRouter } = require('./incidenceCategories.router')

router
  .use('/employees', employeesRouter)
  .use('/auth', authRouter)
  .use('/incidenceCategories', incidenceCategoriesRouter)

exports.router = router