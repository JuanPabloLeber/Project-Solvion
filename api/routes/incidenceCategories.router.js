const incidenceCategoriesRouter = require('express').Router()
const { checkAuth, checkTechnician, checkManager, checkCustomerService } = require('../../utils')

const {
  addIncidenceCategory,
  getIncidenceCategories,
  updateIncidenceCategory,
  deleteIncidenceCategory
} = require('../controllers/employees.controller')

incidenceCategoriesRouter.post('/', addIncidenceCategory)
incidenceCategoriesRouter.get('/', getIncidenceCategories)
incidenceCategoriesRouter.put('/', updateIncidenceCategory)
incidenceCategoriesRouter.delete('/', deleteIncidenceCategory)

exports.incidenceCategoriesRouter = incidenceCategoriesRouter