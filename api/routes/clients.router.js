const clientsRouter = require('express').Router()

const {
  listUserIncidences
} = require('../controllers/clients.controller')

clientsRouter.get('/clientEmail/:clientEmail/clientPassword/:clientPassword', listUserIncidences)

exports.clientsRouter = clientsRouter
