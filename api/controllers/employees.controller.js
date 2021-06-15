const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { employeeModel } = require('../models/employees.model')

exports.addEmployee = (req, res) => {
  const hashed_pwd = bcrypt.hashSync(req.body.password, 10)
  employeeModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        res.status(409).json({ err: 'Email already exists. Try another one' })
      } else {
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
        employeeModel
          .findOne({ email: req.body.employee.email })
          .then(user => {
            if (user) res.status(403).json({ msg: 'The email already exists!' })
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({ msg: 'Error' })
          })
      }
      if (req.body.employee.password) {
        req.body.employee.password = bcrypt.hashSync(req.body.employee.password, 10)
      }

      console.log(result)
      user.save(function (err, result) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(result)
        }
      })
      res.status(200).json({ msg: 'Update successful!' })
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
      console.log('hola')
      res.status(200).json({ msg: `The user with email: ${user.email}, has been deleted!` })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}
