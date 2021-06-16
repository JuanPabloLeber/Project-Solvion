const clientsRouter = require('express').Router()

const {
listUserIncidences
} = require('../controllers/clients.controller')

clientsRouter.get('/', listUserIncidences)


exports.clientsRouter = clientsRouter