const mongoose = require('mongoose')

const incidenceCategoriesSchema = new mongoose.Schema({
  name: {
    type: String
  }
})

const incidenceCategoriesModel = mongoose.model('incidenceCategories', incidenceCategoriesSchema)

exports.incidenceCategoriesModel = incidenceCategoriesModel