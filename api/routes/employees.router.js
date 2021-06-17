const employeesRouter = require('express').Router()
const { checkAuth, checkManager } = require('../../utils')

const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees
} = require('../controllers/employees.controller')

employeesRouter.get('/', checkAuth, checkManager, getAllEmployees)
employeesRouter.post('/', addEmployee)
employeesRouter.put('/:idEmployee', checkAuth, checkManager, updateEmployee)
employeesRouter.delete('/', checkAuth, checkManager, deleteEmployee)

exports.employeesRouter = employeesRouter
