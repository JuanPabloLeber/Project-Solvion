const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true,
    enum: ['Technician', 'CustomerService', 'Manager']
  },
  specialty: {
    type: Array
  }
})

const employeeModel = mongoose.model('employee', employeeSchema)

exports.employeeModel = employeeModel
