const incidencesRouter = require('express').Router()
const { checkAuth } = require('../../utils')

const {
createIncidence,
getIncidence,
updateIncidence,
deleteIncidence
} = require('../controllers/incidences.controller')

incidencesRouter.get('/:incidenceID', getIncidence)
incidencesRouter.post('/:customerServiceId/:incidenceCategory', createIncidence)
incidencesRouter.put('/:incidenceID', checkAuth, updateIncidence)
incidencesRouter.delete('/incidenceID/:incidenceID', deleteIncidence)

exports.incidencesRouter = incidencesRouter
