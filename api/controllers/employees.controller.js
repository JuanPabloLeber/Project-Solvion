const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { isValidEmail } = require('../../utils')

const { employeeModel } = require('../models/employees.model')
const { incidencesModel } = require('../models/incidences.model')

exports.addEmployee = (req, res) => {
  const hashed_pwd = bcrypt.hashSync(req.body.password, 10)
  employeeModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        res.status(409).json({ err: 'Email already exists. Try another one' })
      } else {
        if (isValidEmail(req.body.email)) {
          employeeModel
            .create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              specialty: req.body.specialty,
              rol: req.body.rol,
              email: req.body.email,
              password: hashed_pwd
            })
            .then(user => {
              const user_data = { rol: user.rol, email: user.email }

              const token = jwt.sign(
                user_data,
                process.env.SECRET, // TODO SECRET MORE SECRET PLEASE
                { expiresIn: '1h' }
              )
              return res.json({ token: token, ...user_data })
            })
            .catch(err => {
              console.log(err)
              res.status(500).json({ msg: 'Error' })
            })
        } else {
          res.status(409).json({ err: 'Wrong email format' })
        }
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.getAllEmployees = (req, res) => {
  employeeModel
    .find({}, { password: 0, __v: 0 })
    .then(employees => res.status(200).json(employees))
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.updateEmployee = (req, res) => {
  employeeModel
    .findById(req.params.idEmployee)
    .then(user => {
      if (req.body.employee.email) {
        if (!isValidEmail(req.body.employee.email)) {
          return res.status(409).json({ err: 'Wrong email format' })
        }
      }
      if (req.body.employee.password) {
        user.password = bcrypt.hashSync(req.body.employee.password, 10)
      }

      user.firstName = req.body.employee.firstName ?? user.firstName
      user.lastName = req.body.employee.lastName ?? user.lastName
      user.specialty = req.body.employee.specialty ?? user.specialty
      user.email = req.body.employee.email ?? user.email
      user.rol = req.body.employee.rol ?? user.rol

      user.save(function (err, result) {
        if (err) {
          res.status(500).json({ msg: 'Error' })
        } else {
          res.status(200).json({ msg: 'Update successful!' })
        }
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.deleteEmployee = (req, res) => {
  employeeModel
    .findOneAndRemove({ email: req.body.email })
    .then(user => {
      if (user.rol === 'Technician') {
        incidencesModel
          .updateMany({ Technician: user.id }, { Technician: '' })
        incidencesModel
          .find()
          .then(incidences => {
            incidences.forEach(incidence => {
              incidence.actions.forEach(action => {
                if (action.technicianId.toString() === user.id.toString()) {
                  action.technicianId = null
                }
              })
              incidence.save(function (err, result) {
                if (err) {
                  console.log(err)
                }
              })
            })
          })
      }
      res.status(200).json({ msg: `The user with email: ${user.email}, has been deleted!` })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

/*.then(incidences => {
  incidences.forEach(incidence => {
    incidence.actions.forEach(action => {
      console.log(action.technicianId)
      console.log(user.id)
      if (action.technicianId.toString() === user.id.toString()) {
        action.technicianId = ''
      }
    })
  })
})*/
