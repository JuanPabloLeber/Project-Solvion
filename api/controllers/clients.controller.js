const { incidencesModel } = require('../models/incidences.model')

exports.listUserIncidence = (req, res) => {
  incidencesModel
    .findById(req.params.id)
    .then(incidences => {
      if (incidences[0].client.password === req.body.client.password) {
        console.log(incidences)
        const incidencesArray = []
        incidences.forEach((incidence, index) => {
          incidencesArray[index] = [{ 'status': incidence.status, 'subject': incidence.subject, 'description': incidence.description }]
          console.log(incidences[0].actions)
          incidences[0].actions.forEach((element1, index1) => {
            incidencesArray[index].push({
              'done': incidences[0].actions[index1].done,
              'status': incidences[0].actions[index1].status,
              'startDate': incidences[0].actions[index1].startDate,
              'finishDate': incidences[0].actions[index1].finishDate,
            })
          })
        })
        res.status(200).json(incidencesArray)
      } else {
        return res.status(401).json({ error: 'Wrong email or password' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}
