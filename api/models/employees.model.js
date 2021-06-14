const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  rol: {
    type: String
  },
  specialty: {
    type: Array
  }
})

const employeeModel = mongoose.model('employee', employeeSchema)

exports.employeeModel = employeeModel