const incidenceCategoriesRouter = require('express').Router()
const { checkAuth, checkManager, checkCustomerServiceOrManager } = require('../../utils')

const {
  addIncidenceCategory,
  getIncidenceCategories,
  updateIncidenceCategory,
  deleteIncidenceCategory
} = require('../controllers/incidenceCategories.controller')

incidenceCategoriesRouter.post('/', checkAuth, checkManager, addIncidenceCategory)
incidenceCategoriesRouter.get('/', checkAuth, checkCustomerServiceOrManager, getIncidenceCategories)
incidenceCategoriesRouter.put('/:idIncidenceCategory', checkAuth, checkManager, updateIncidenceCategory)
incidenceCategoriesRouter.delete('/', checkAuth, checkManager, deleteIncidenceCategory)

exports.incidenceCategoriesRouter = incidenceCategoriesRouter