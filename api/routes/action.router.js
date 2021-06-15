const actionRouter = require('express').Router()

const {
  createAction,
  updateAction,
  getAction
} = require('../controllers/action.controllers')

actionRouter.get('/incidences/:incidenceId/:actionId/getAction', getAction)
actionRouter.post('/incidences/createAction', createAction)
actionRouter.put('/incidences/:incidenceId/:actionId/updateAction', updateAction)

exports.actionRouter = actionRouter
