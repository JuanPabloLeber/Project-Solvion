const { incidencesModel } = require('../models/incidences.model')

exports.listUserIncidence = (req, res) => {
  incidencesModel
    .findById(req.params.id)
    .then(incidence => {
      if (incidence.client.password === req.body.password) {
        const incidenceArray = [{
          status: incidence.status,
          subject: incidence.subject,
          description: incidence.description
        }]
        incidence.actions.forEach((element, index) => {
          incidenceArray.push({
            done: incidence.actions[index].done,
            status: incidence.actions[index].status,
            startDate: incidence.actions[index].startDate,
            finishDate: incidence.actions[index].finishDate
          })
        })
        res.status(200).json(incidenceArray)
      } else {
        return res.status(401).json({ error: 'Wrong email or password' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}
