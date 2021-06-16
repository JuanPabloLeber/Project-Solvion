const actionRouter = require('express').Router()

const { checkAuth } = require('../../utils')
const {
  createAction,
  updateAction,
  getAction
} = require('../controllers/action.controllers')

actionRouter.get('/incidences/:incidenceId/:actionId', getAction)
actionRouter.post('/incidences/:technicianId/:incidenceId', checkAuth, createAction)
actionRouter.put('/incidences/:incidenceId/:actionId', checkAuth, updateAction)

exports.actionRouter = actionRouter
