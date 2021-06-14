const jwt = require('jsonwebtoken')
const { token } = require('morgan')
const { runInNewContext } = require('vm')
const { employeeModel } = require('../api/models/employees.model')

exports.checkAuth = (req, res, next) => {

  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {

    if (err) { res.status(403).json({ error: 'Token not valid 1' }) }

    employeeModel
      .findOne({ email: token.email })
      .then(user => {
        if (user) {
          req.body.token = token
          console.log(req.body)
          //res.locals.user = user
          next()
        } else {
          res.json({ err: 'Token not valid 2' })
        }
      })
    })
  }

  exports.checkManager = (req, res, next) => {


    employeeModel
      .findOne({ email: req.body.token.email })

    .then(user => {
      if (user.rol === 'Manager') {
        res.locals.user = user
        next()
      } else {
        res.json({ err: 'Token not valid' })
      }
    })
}

exports.checkTechnician = (req, res, next) => {
  employeeModel
    .findOne({ email: req.body.token.email })
    .then(user => {
      if (user.rol === 'Technician') {
        res.locals.user = user
        next()
      } else {
        res.json({ err: 'Token not valid' })
      }
    })
}

exports.checkCustomerService = (req, res, next) => {
  employeeModel
    .findOne({ email: req.body.token.email })
    .then(user => {
      if (user.rol === 'CustomerService') {
        res.locals.user = user
        next()
      } else {
        res.json({ err: 'Token not valid' })
      }
    })
}