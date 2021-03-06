const router = require('express').Router()

const { employeesRouter } = require('./employees.router')
const { authRouter } = require('./auth.router')
const { incidenceCategoriesRouter } = require('./incidenceCategories.router')
const { clientsRouter } = require('./clients.router')
const { incidencesRouter } = require('./incidences.router')

router
  .use('/employees', employeesRouter)
  .use('/auth', authRouter)
  .use('/incidenceCategories', incidenceCategoriesRouter)
  .use('/client', clientsRouter)
  .use('/incidences', incidencesRouter)

exports.router = router
