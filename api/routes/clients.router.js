const clientsRouter = require('express').Router()

const {
listUserIncidences
} = require('../controllers/clients.controller')

clientsRouter.get('/listUserIncidences', listUserIncidences)


exports.clientsRouter = clientsRouter