const clientsRouter = require('express').Router()

const {
  listUserIncidence
} = require('../controllers/clients.controller')

clientsRouter.get('/incidenceId/:id/', listUserIncidence)

exports.clientsRouter = clientsRouter
