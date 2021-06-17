const incidencesRouter = require('express').Router()
const { checkAuth, checkManager, checkCustomerServiceOrManager, checkTechnicianOrManager } = require('../../utils')

const {
  createIncidence,
  getIncidence,
  getAllIncidences,
  updateIncidence,
  deleteIncidence,
  createAction,
  updateAction,
  getAction
} = require('../controllers/incidences.controller')

incidencesRouter.get('/', checkAuth, checkManager, getIncidence)
incidencesRouter.get('/:incidenceID', getIncidence)
incidencesRouter.post('/', checkAuth, checkCustomerServiceOrManager, createIncidence)
incidencesRouter.post('/:incidenceId/technician/:technicianId', checkAuth, checkTechnicianOrManager, createAction)
incidencesRouter.put('/:incidenceID', checkAuth, checkTechnicianOrManager, updateIncidence)
incidencesRouter.put('/:incidenceId/action/:actionId', checkAuth, checkTechnicianOrManager, updateAction)
incidencesRouter.delete('/:incidenceID', checkAuth, checkManager, deleteIncidence)

exports.incidencesRouter = incidencesRouter
