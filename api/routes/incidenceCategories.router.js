const incidenceCategoriesRouter = require('express').Router()
const { checkAuth, checkTechnician, checkManager, checkCustomerService } = require('../../utils')

const {
  addIncidenceCategory,
  getIncidenceCategories,
  updateIncidenceCategory,
  deleteIncidenceCategory
} = require('../controllers/incidenceCategories.controller')

incidenceCategoriesRouter.post('/', checkAuth, checkManager, addIncidenceCategory)
incidenceCategoriesRouter.get('/', checkAuth, getIncidenceCategories)
incidenceCategoriesRouter.put('/', checkAuth, checkManager, updateIncidenceCategory)
incidenceCategoriesRouter.delete('/', checkAuth, checkManager, deleteIncidenceCategory)

exports.incidenceCategoriesRouter = incidenceCategoriesRouter