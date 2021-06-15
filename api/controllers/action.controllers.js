


const { actionModel } = require('../models/action.model')

exports.createAction = (req, res) => {
  actionModel
    .create({
      done: req.body.done,
      status: req.body.done,
      startDate: req.body.startDate,
      finishDate: req.body.finishDate, 
      finishDate: req.body.finishDate
    })
    .then(user => {

    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error '})
    })
}



exports.updateAction = (req, res) => {
  actionModel
    .findOneAndUpdate({})
}