const { incidencesModel } = require('../models/incidences.model')

exports.createAction = (req, res) => {
  incidencesModel
    .findById(req.params.incidenceId)
    .then(incidence => {
      incidence.actions.push({ technicianId: req.params.technicianId, ...req.body })
      incidence.save(err => {
        if (err) res.status(500).send(err)
        res.status(200).json(incidence)
      })
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
      const action = incidence.actions.id(req.params.actionId)

      incidence.actions.id(req.params.actionId).done = req.body.done ?? action.done
      incidence.actions.id(req.params.actionId).status = req.body.status ?? action.status
      incidence.actions.id(req.params.actionId).startDate = action.startDate
      incidence.actions.id(req.params.actionId).finishDate = action.finishDate
      incidence.actions.id(req.params.actionId).technicianId = action.technicianId

      incidence.save(err => {
        if (err) res.status(500).send(err)
        res.status(200).json(incidence)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error ' })
    })
}

exports.getAction = (req, res) => {
  incidencesModel
    .findById(req.params.incidenceId)
    .then(incidence => {
      const action = incidence.actions.id(req.params.actionId)
      console.log(action)
      res.status(200).json(action)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error ' })
    })
}
