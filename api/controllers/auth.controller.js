const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { employeeModel } = require('../models/employees.model')


exports.signup = (req, res) => {
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

exports.login = (req, res) => {
  employeeModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        bcrypt.compareSync(req.body.password, user.password, (err, result) => {
          if (!result) {
            console.log(req.body)
            return res.json({ error: 'Wrong email or password 1' })
          }
          const user_data = { rol: user.rol, email: user.email }
          const token = jwt.sign(
            user_data,
            process.env.SECRET, // TODO SECRET MORE SECRET PLEASE
            { expiresIn: '1h' }
            )
            console.log(token, user_data)
            return res.json({ token: token, ...user_data })
        })
      } else {
        return res.json({ error: 'Wrong email or password 2' })
      }
    })
    .catch(err => {
      console.log(err)
      res.json({ err: 'Error' })
    })
}

exports.whoami = (req, res) => {
  res.json({ rol: res.locals.user.rol, email: res.locals.user.email })
}