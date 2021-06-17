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

exports.getIncidenceCategories = (req, res) => {
  incidenceCategoriesModel
    .find({}, { _id: 1, name: 1 })
    .then(incidenceCategories => res.status(200).json(incidenceCategories))
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.updateIncidenceCategory = (req, res) => {
  incidenceCategoriesModel
    .findByIdAndUpdate(req.params.idIncidenceCategory, { name: req.body.name })
    .then(incidenceCategory => {
      if (incidenceCategory) {
        res.status(200).json({ msg: `The incidence category '${req.body.name}' has been updated!` })
      } else {
        res.status(404).json({ msg: 'Category incidence not found' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}

exports.deleteIncidenceCategory = (req, res) => {
  incidenceCategoriesModel
    .findByIdAndRemove(req.params.idIncidenceCategory)
    .then(incidenceCategory => res.status(200).json(`The incidence category '${incidenceCategory.name}' has been deleted`))
    .catch(err => {
      console.log(err)
      res.status(500).json({ msg: 'Error' })
    })
}
