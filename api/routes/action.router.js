const actionRouter = require('express').Router()

const {
  createAction,
  updateAction,
  getAction
} = require('../controllers/action.controllers')

actionRouter.get('/incidences/:incidenceId/:actionId', getAction)
actionRouter.post('/incidences/:technicianId/:incidenceId', createAction)
actionRouter.put('/incidences/:incidenceId/:actionId', updateAction)

exports.actionRouter = actionRouter
