const incidencesRouter = require('express').Router()


const {
createIncidence
} = require('../controllers/incidences.controller')

incidencesRouter.post('/:customerServiceId/:incidenceCategory', createIncidence)

exports.incidencesRouter = incidencesRouter
