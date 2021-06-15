const { incidencesModel } = require('../models/incidences.model')

exports.listUserIncidences = (req, res) => {
  incidencesModel
    .find({ client: { email: req.body.email } })
    .then(incidences => {
      const incidencesArray = []
      incidences.forEach(incidence => {
        incidencesArray.push([incidence.status, incidence.actions, incidence.timeToSolve])
      })
      res.status(200).json(incidencesArray)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}