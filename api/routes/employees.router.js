const employeesRouter = require('express').Router()
const { checkAuth, checkManager } = require('../../utils')

const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees
} = require('../controllers/employees.controller')

employeesRouter.post('/', addEmployee)
employeesRouter.put('/:idEmployee', checkAuth, checkManager, updateEmployee)
employeesRouter.get('/', checkAuth, checkManager, getAllEmployees)
employeesRouter.delete('/', checkAuth, checkManager, deleteEmployee)

exports.employeesRouter = employeesRouter