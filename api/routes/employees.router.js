const employeesRouter = require('express').Router()
const { checkAuth, checkTechnician, checkManager, checkCustomerService } = require('../../utils')

const {
  addEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employees.controller')

employeesRouter.post('/addEmployee', addEmployee)
employeesRouter.put('/updateEmployee', checkAuth, updateEmployee)
employeesRouter.delete('/deleteEmployee', checkAuth, checkManager, deleteEmployee)

exports.employeesRouter = employeesRouter