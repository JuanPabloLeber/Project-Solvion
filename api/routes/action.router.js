const actionRouter = require('express').Router()

const {
  createAction,
  updateAction,
  getAction
} = require('../controllers/action.controllers')

actionRouter.get('/incidences/getAction', getAction)
actionRouter.post('/incidences/createAction', createAction)
actionRouter.put('/incidences/updateAction', updateAction)

exports.actionRouter = actionRouter
