const actionRouter = require('express').Router()

const {
  createAction,
  updateAction,
  getAction
} = require('../controllers/action.controllers')

actionRouter.post('/incidences/createAction', createAction)
actionRouter.put('/incidences/updateAction', updateAction)
actionRouter.get('/incidences/getAction', getAction)

exports.actionRouter = actionRouter
