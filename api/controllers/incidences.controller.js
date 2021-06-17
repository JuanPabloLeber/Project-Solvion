
const { incidencesModel } = require('../models/incidences.model')

exports.createIncidence = (req, res) => {
  console.log(req.body)
  const day = new Date()
  const finishD = new Date(0)

  incidencesModel
    .create({
      subject: req.body.subject,
      description: req.body.description,
      status: 'Open',
      priority: ' ',
      startDate: day,
      finishDate: finishD,
      incidenceCategory: req.body.incidenceCategory,
      client: {
        firstName: req.body.client.firstName,
        lastName: req.body.client.lastName,
        email: req.body.client.email,
        password: req.body.client.password,
        phoneNumber: req.body.client.phoneNumber,
        address: req.body.client.address
      }
    })
    .then(incidence => {
      res.status(200).json(incidence)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.getAllIncidences = (req, res) => {
  incidencesModel
    .find()
    .populate('incidenceCategory')
    .populate('Technician')
    .then(incidence => {
      res.status(200).json(incidence)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.getIncidence = (req, res) => {
  incidencesModel
    .findById(req.params.incidenceID)
    .populate('incidenceCategory')
    .populate('Technician')
    .then(incidence => {
      res.status(200).json(incidence)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.updateIncidence = (req, res) => {
  incidencesModel
    .findById(req.params.incidenceID)
    .then(incidence => {
      const copyIncidence = incidence
      incidence.subject = req.body.subject ?? copyIncidence.subject
      incidence.description = req.body.description ?? copyIncidence.description
      incidence.status = req.body.status ?? copyIncidence.status
      incidence.priority = req.body.priority ?? copyIncidence.priority
      incidence.startDate = copyIncidence.startDate
      incidence.finishDate = req.body.finishDate ?? copyIncidence.finishDate
      incidence.Technician = req.body.Technician ?? copyIncidence.Technician
      incidence.incidenceCategory = req.params.incidenceCategory ?? copyIncidence.incidenceCategory
      incidence.actions = copyIncidence.actions
      incidence.client = copyIncidence.client

      incidence.save(err => {
        if (err) res.status(500).send(err)
        res.status(200).json(incidence)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.deleteIncidence = (req, res) => {
  incidencesModel
    .findByIdAndDelete(req.params.incidenceID, (err) => {
      if (err) {
        return ('There was a problem while deleting')
      } else {
        return ('Deleting accomplished')
      }
    })
    .then(() => {
      res.status(200).json('The incidence was deleted')
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.createAction = (req, res) => {
  incidencesModel
    .findById(req.params.incidenceId)
    .then(incidence => {
      incidence.actions.push({ technicianId: req.params.technicianId, startDate: new Date(), finishDate: new Date(0), ...req.body })
      incidence.save(err => {
        if (err) res.status(500).json({ msg: 'Error'})
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
