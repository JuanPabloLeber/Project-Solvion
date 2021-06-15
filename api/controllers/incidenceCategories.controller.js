const { incidenceCategoriesModel } = require('../models/incidencesCategories.model')

exports.addIncidenceCategory = (req, res) => {
  incidenceCategoriesModel
    .create({ name: req.body.name })
    .then(incidenceCategory => res.status(200).json({ msg: `${incidenceCategory.name} was created!` }))
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.getIncidenceCategories = () => {

}

exports.updateIncidenceCategory = () => {

}

exports.deleteIncidenceCategory = () => {

}