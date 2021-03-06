const jwt = require('jsonwebtoken')
const { token } = require('morgan')
const { runInNewContext } = require('vm')
const { employeeModel } = require('../api/models/employees.model')

exports.checkAuth = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) { res.status(403).json({ error: 'Token not valid' }) }
    employeeModel
      .findOne({ email: token.email })
      .then(user => {
        if (user) {
          req.body.token = token
          next()
        } else {
          res.status(500).json({ err: 'Token not valid' })
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
        res.status(500).json({ err: 'Token not valid' })
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
        res.status(500).json({ err: 'Token not valid' })
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
        res.status(500).json({ err: 'Token not valid' })
      }
    })
}

exports.checkCustomerServiceOrManager = (req, res, next) => {
  employeeModel
    .findOne({ email: req.body.token.email })
    .then(user => {
      if (user.rol === 'CustomerService' || user.rol === 'Manager') {
        res.locals.user = user
        next()
      } else {
        res.status(500).json({ err: 'Token not valid' })
      }
    })
}

exports.checkCustomerServiceOrManagerOrTechnician = (req, res, next) => {
  employeeModel
    .findOne({ email: req.body.token.email })
    .then(user => {
      if (user.rol === 'CustomerService' || user.rol === 'Manager' || user.rol === 'Technician') {
        res.locals.user = user
        next()
      } else {
        res.json({ err: 'Token not valid' })
      }
    })
}

exports.checkTechnicianOrManager = (req, res, next) => {
  employeeModel
    .findOne({ email: req.body.token.email })
    .then(user => {
      if (user.rol === 'Technician' || user.rol === 'Manager') {
        res.locals.user = user
        next()
      } else {
        res.status(500).json({ err: 'Token not valid' })
      }
    })
}

exports.isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
