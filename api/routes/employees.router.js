const employeesRouter = require('express').Router()
const { checkAuth, checkManager } = require('../../utils')

const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployee
} = require('../controllers/employees.controller')

employeesRouter.get('/', checkAuth, checkManager, getAllEmployees)
employeesRouter.get('/:idEmployee', checkAuth, checkManager, getEmployee)
employeesRouter.post('/', addEmployee)
employeesRouter.put('/:idEmployee', checkAuth, checkManager, updateEmployee)
employeesRouter.delete('/:idEmployee', checkAuth, checkManager, deleteEmployee)

exports.employeesRouter = employeesRouter
