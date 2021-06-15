


const { incidencesModel } = require('../models/incidences.model')

exports.createAction = (req, res) => {
  incidencesModel
    .create({
      done: req.body.done,
      status: req.body.done,
      startDate: req.body.startDate,
      finishDate: req.body.finishDate
    })
    .then(user => {
      res.status(200).json
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error ' })
    })
}



exports.updateAction = (req, res) => {
  incidencesModel
    .findById(req.params.incidenceId)
    .then(incidence => {
      incidence.actions.filter()
    })
}

exports.getAction = (req, res) => {
  incidencesModel
    .find()
}
