const incidenceCategoriesRouter = require('express').Router()
const { checkAuth, checkManager, checkCustomerServiceOrManager } = require('../../utils')

const {
  addIncidenceCategory,
  getIncidenceCategories,
  updateIncidenceCategory,
  deleteIncidenceCategory
} = require('../controllers/incidenceCategories.controller')

incidenceCategoriesRouter.get('/', checkAuth, checkCustomerServiceOrManager, getIncidenceCategories)
incidenceCategoriesRouter.post('/', checkAuth, checkManager, addIncidenceCategory)
incidenceCategoriesRouter.put('/:idIncidenceCategory', checkAuth, checkManager, updateIncidenceCategory)
incidenceCategoriesRouter.delete('/:idIncidenceCategory', checkAuth, checkManager, deleteIncidenceCategory)

exports.incidenceCategoriesRouter = incidenceCategoriesRouter
