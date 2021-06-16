const { incidencesModel } = require('../models/incidences.model')

exports.createIncidence = (req, res) => {
  const day = new Date()
  const isoDay = day.toISOString()
  const finishD = new Date(0000,00,00)

  console.log(isoDay)
  incidencesModel
    .create({
      subject: req.body.subject,
      description: req.body.description,
      status: 'Open',
      priority: ' ',
      startDate: day,
      finishDate: finishD,
      employees: [],
      incidenceCategory: req.params.incidenceCategory,
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