const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { employeeModel } = require('../models/employees.model')

exports.login = (req, res) => {
  employeeModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (!result) {
            console.log(err)
            return res.status(403).json({ error: 'Wrong email or password' })
          }
          const user_data = { rol: user.rol, email: user.email }
          const token = jwt.sign(
            user_data,
            process.env.SECRET, // TODO SECRET MORE SECRET PLEASE
            { expiresIn: '1h' }
          )
          return res.status(200).json({ token: token, ...user_data })
        })
      } else {
        return res.status(403).json({ error: 'Wrong email or password' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.whoami = (req, res) => {
  res.status(200).json({
    firstName: req.body.user.firstName,
    lastName: req.body.user.lastName,
    rol: req.body.user.rol,
    email: req.body.user.email,
    specialty: req.body.user.specialty
  })
}
